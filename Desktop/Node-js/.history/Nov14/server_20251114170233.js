const http= require("http");
const server= http.createServer(function(req,res){
console.log("request received");
res.end("hello There")
});
server.listen(7897,function(){
    console.log("it is listening");
})