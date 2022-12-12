var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  //console.log(req.url);

  switch(req.url){
    case "/welcome":{
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("Welcome to Dominos!");
        break;
    }
    case "/contact":{
        res.writeHead(200,{"Content-type": "application/json"});
        res.end(JSON.stringify({
            phone:"18602100000",
            email:"guestcaredominos@jublfood.com"
        }));
        break;
    }
    default : {
        res.writeHead(404);
        res.end("404 Not Found");
    }

  }
  
}

httpServer.listen(8081,()=>{
    console.log("server is up @ 5000");
})

module.exports = httpServer;