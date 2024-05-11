const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
.then(()=> console.log("connection successfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}

let chat1 = new Chat({
  from: "tony",
  to: "hulk",
  msg: "hi, big man",
  created_at: new Date(),
});
chat1.save().then((res)=>console.log(res));

app.get('/', (req, res)=>{
    res.send("welcome to homepage.")
});

app.listen(8080, (req, res)=>{
    console.log("server is listening on port 8080: ")
});