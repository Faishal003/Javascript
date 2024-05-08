const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String
})

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "faishal ahmed emon",
//   email: "faishal@gmail.com",
//   age: "20"
// });

// user1.save();

User.insertMany([
  {name: "Tony", email: "tony@gmail.com", age: 50},
  {name: "hulk", email: "hulk@gmail.com", age: 55},
  {name: "Peter", email: "peter@gmail.com", age: 26},
]).then((res)=>console.log(res));
