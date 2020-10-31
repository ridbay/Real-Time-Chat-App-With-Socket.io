const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname + "/../client"));

http.listen(3000);

console.log("Server is listening on http://localhost:3000");

const users = {};
io.on("connection", (socket) => {
  console.log("connected...");
 socket.on("user connected", payload=>{
   users[socket.id] ={
     id: socket.id,
     name: payload.name,
     avatar: payload.avatar
   };
   socket.broadcast.emit("user connected", users[socket.id])
 })


});
