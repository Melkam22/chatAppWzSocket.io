const express = require("express");
const socket = require("socket.io");
//const mongoose = require("mongoose");
const app = express();
const server = app.listen(5000, function() {
  console.log("listen on port 5000");
}); //to deploy it on heroku added the below 1 line
//const server = require("http").Server(app);
//const chatData = require("./schema");
//static files
app.use(express.static("public"));

//socket.io, is connected to the server since we passed it as a parameter in below function
const io = socket(server);
//socket connected to server we ll get the below message, but we ve to connect it to frontend on index.html
io.on("connect", function(socket) {
  console.log("socket is connected", socket.id); //socket.id each refresh generate new id
  socket.on("chat", function(data) {
    io.sockets.emit("chat", data);
  }); //then with this we ll go to frontend(chat.js) and handle these data to generate on browser
});
