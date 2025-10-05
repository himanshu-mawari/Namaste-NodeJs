const http = require("node:http");

const server = http.createServer((req , res) =>{
    if(req.url === "/friend") {
        res.end("Hey bruh!!! Whats upp....");
    }else{
        res.end("Hello world from the server side!!!");
    }
});

const port = 5056;
server.listen(port);