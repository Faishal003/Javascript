const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=> console.log("connection successfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}

let chats = [{
    from: "tony",
    to: "hulk",
    msg: "hi, big man",
    created_at: new Date(),
  },
  {
    from: "captain marvel",
    to: "thor",
    msg: "hi, big marvel.",
    created_at: new Date(),
  },
  {
    from: "alex",
    to: "blex",
    msg: "the weather is cold not.",
    created_at: new Date(),
  },
  {
    from: "rocket",
    to: "gamora",
    msg: "you should change your costume",
    created_at: new Date(),
  },
  {
    from: "groot",
    to: "rocket",
    msg: "I am groot.",
    created_at: new Date(),
  },
  {
    from: "rocket",
    to: "baki",
    msg: "how much for your hand and gun..",
    created_at: new Date(),
  },
  {
    from: "sir",
    to: "student",
    msg: "why are you so late everyday?",
    created_at: new Date(),
  },
  {
    from: "peter",
    to: "stark",
    msg: "hi, Mr. Stark",
    created_at: new Date(),
  }
];
Chat.insertMany(chats);