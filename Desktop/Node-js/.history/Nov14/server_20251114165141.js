const http= require("http");
const server= http.createServer(function(req,res){
console.log("request received");
});
server.listen(7897,function(){
    console.log("it is listening");
})