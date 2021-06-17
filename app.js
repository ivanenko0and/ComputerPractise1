const http = require("http");
const fs = require("fs");
  
http.createServer(function(request, response){
      
    console.log(`Запрошенный адрес: ${request.url}`);
    
    if(request.url == "/"){
        var filePath = "index.html";
    }else{
        var filePath = String(request.url);
    }
    fs.readFile(filePath, function(error, data){
              
        if(error){
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            response.end(data);
        }
    });
}).listen(3000, function(){
    console.log("Server started at 3000");
});

