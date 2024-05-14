const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

main()
.then(()=> console.log("connection successfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}

app.get('/chats', async (req, res)=>{
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", {chats});
})

//new chat
app.get('/chats/new', (req, res)=>{
  res.render("new.ejs");
});

app.get('/', (req, res)=>{
    res.send("welcome to homepage.")
});

app.listen(8080, (req, res)=>{
    console.log("server is listening on port 8080: ")
});