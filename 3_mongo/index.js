const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

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

app.post('/chats', (req, res)=>{
  let {from, to, msg} = req.body;
  let chats = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  chats.save().then((res)=>console.log("chat was saved")).catch((err)=>console.log(err));
  res.redirect("/chats");
});

//update
app.get('/chats/:id/edit', async(req, res)=>{
  let {id} = req.params;
  let user = await Chat.findById(id);
  res.render("update.ejs", {user});
});

app.get('/', (req, res)=>{
    res.send("welcome to homepage.")
});

app.listen(8080, (req, res)=>{
    console.log("server is listening on port 8080: ")
});