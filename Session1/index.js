console.log('salem ')
//types of modules :
//1- build in module =====> core module
// 2 -custom module 



const httpServer= require('http');
const fs=require('fs') ;

const htmlContent = fs.readFileSync('index.html');
let users=[
    {name:"Mamie", age: 33},
    {name:"Mayme", age: 40},
    {name:"Jim", age:15 },
    {name:"Philip", age:16 },
    {name:"Francis", age:17 }
]

const server = httpServer.createServer(function(req, res){
if(req.url=="/" && req.method=="GET"){
    res.end(JSON.stringify(users));
}
else if (req.url=="/about" && req.method=="GET") {
res.end(htmlContent)
}
if(req.url == "/contact" && req.method == 'GET'){
    res.end("contact")
}
else if (req.url=="/adduser" && req.method=="POST") {
    req.on("data", function(chunk){
        console.log(JSON.parse(chunk))
    })
    res.end("adduser")
    }

else{
    res.end('404 not found')
}
})
server.listen(3000, function(){
    console.log("server is runing...")
})