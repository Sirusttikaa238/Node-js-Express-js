// Append the file 

 //const fs = require("fs");

// fs.appendFile("hello.txt", " New Text updated", (err) => {
//     if (err) {
//         console.log("Error: ", err);
//         return;
//     }

//     console.log("Data updated");
// });


// Delete the file 

// fs.unlink("new.txt",(err)=>{
//     if(err){
//         console.log("Error: ",err);
//         return;
//     }
//     console.log("File deleted successfully");
    
// })


 // Renamed file 
// const fs = require("fs");

// fs.rename("hello.txt", "hello.js", (err) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }
//    console.log("File renamed successfully!");
// });

 // Write the file(create the file and there disaplay the content )
// const fs = require("fs");

// fs.writeFile("hello.txt", "This is new file content", (err) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }

//     console.log("File created/written successfully!");
// });




// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     if(req.url === "/"){
//         res.end("Hello, World! This is the home page.");
//     } else if (req.url === "/about") {
//         res.end("Welcome to the About Page!");


//     } 
//     else {
//         res.statusCode = 404;
//         res.end("page not found");

//     }
// });server.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });
















//project 2 afternoon


// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello, Welcome to my express serverr!");
// }); 

// app.listen(3000, () => {
//     console.log("Server created at http://localhost:3000");
// });


// const express = require("express");
// const app = express();

// //MIDDLEWARE to read json data from request body
// app.use(express.json());

// let users =[
//     {id:1, name:"yaalu"},
// ];

// app.get("/users", (req, res) => {
//     response.status(200).json(users);
// });
// app.post("/users", (req, res) => {
//     const newUser=req.body;

//     const user = {
//         id: users.length + 1,
//         name: newUser.name,
//     };
//     users.push(user);
//     res.status(201).json({
//         message: "User created successfully",
//         user: user,
//     });
// }
// );



const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "sri" }
];

// Root route
app.get("/", (req, res) => {
  res.send("Hello welcome to my express server!");
});

// GET - Fetch all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// POST - Create a new user
app.post("/users", (req, res) => {
  const newUser = req.body;

  const user = {
    id: users.length + 1,
    name: newUser.name
  };

  users.push(user);

  res.status(201).json({
    message: "User created successfully",
    user: user
  });
});

// PUT - Update a user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const user = users.find(u => u.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = updatedData.name || user.name;

  res.status(200).json({
    message: "User updated successfully",
    user: user
  });
});

// DELETE - Remove a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex(u => u.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);

  res.status(200).json({
    message: "User deleted successfully",
    deleted: deletedUser
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

