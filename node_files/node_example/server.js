//include http library for handling connections
const http=require('http')
//Creating a server
const server=http.createServer(function(request,response){
    console.log(`user visited ${request.url}`)//shows the relative url that the user visited
    response.end("hello")//end the request by responding with a "hello"
})//this function is run everytime someone makes a call

console.log("listening on http://localhost:5000")
server.listen(5000)//then it will start running on port 5000

//favicon.ico is the tiny logo that shows up in the tab
//node uses CommonJS