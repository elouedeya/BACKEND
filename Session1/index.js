// console.log('salem ')
// //types of modules :
// //1- build in module =====> core module
// // 2 -custom module

// const httpServer= require('http');
// const fs=require('fs') ;

// const htmlContent = fs.readFileSync('index.html');
// let users=[
//     {name:"Mamie", age: 33},
//     {name:"Mayme", age: 40},
//     {name:"Jim", age:15 },
//     {name:"Philip", age:16 },
//     {name:"Francis", age:17 }
// ]

// const server = httpServer.createServer(function(req, res){
// if(req.url=="/" && req.method=="GET"){
//     res.end(JSON.stringify(users));
// }
// else if (req.url=="/about" && req.method=="GET") {
// res.end(htmlContent)
// }
// if(req.url == "/contact" && req.method == 'GET'){
//     res.end("contact")
// }
// else if (req.url=="/adduser" && req.method=="POST") {
//     req.on("data", function(chunk){
//         console.log(JSON.parse(chunk))
//     })
//     res.end("adduser")
//     }

// else{
//     res.end('404 not found')
// }
// })
// server.listen(3000, function(){
//     console.log("server is runing...")
// })

const express = require("express");

const app = express();
app.use(express.json());

let users = [
  { name: "Mamie", email: "sig@jod.es", age: 33 },
  { name: "Mayme", email: "ikeje@cuvogdi.ie", age: 40 },
  { name: "Jim", email: "arozolob@ke.fm", age: 15 },
  { name: "Philip", email: "ibku@goor.hu", age: 16 },
  { name: "Francis", email: "bob@ovijoh.as", age: 17 },
];
app.get("/", (req, res) => {
  res.send(users);
  // res.json(users);
  // res.sendFile(__dirname+'/index.html')
});

app.post("/adduser", (req, res) => {
  let isExist = users.find((ele) => ele.name == req.body.name);
  if (isExist) {
    res.send("name is already exist");
  } else {
    console.log(req.body);
    res.send("salem from add user");
    users.push(req.body);
  }
});

app.delete("/deleteuser", (req, res) => {
  let userIndex = users.findIndex((ele) => ele.email == req.body.email);
  if (userIndex > -1) {
    users.splice(userIndex, 1);
    res.send("deleted successfully");
  } else {
    res.send("Please enter a valid email address");
  }
});

app.patch("/update", (req, res) => {
  let { email, name } = req.body;
  let userIndex = users.findIndex((ele) => ele.email == email);
  if (userIndex > -1) {
    users[userIndex].name = name;
    res.send("update successfuly");
  } else {
    res.send("email is invalid");
  }
});
app.listen(3000, () => {
  console.log("server is running......");
});
