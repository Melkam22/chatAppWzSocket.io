//make connections with index.js & show the message on the console.log
//const mongoose = require("mongoose");
//const schema = mongoose.Schema;
const socket = io.connect("http://localhost:5000");

//DOM Selection
const message = document.querySelector("#message");
const handle = document.querySelector("#handle");
const btn = document.querySelector("#send");
const output = document.querySelector("#output");

//emit events
btn.addEventListener("click" /* onload */, function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

//we ll listen for events

/* const userSchema = new mongoose.Schema({ */
socket.on("chat", function(data) {
  output.innerHTML += `<p><strong>  ${data.handle} :</strong>  ${data.message} </p>`;
});
/*})
const userModel = mongoose.model("chatData", userSchema);
module.exports = userModel; */
