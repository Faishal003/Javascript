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

// User.updateOne({name: "hulk",age: 100}).then((res)=>console.log(res)).catch((err)=>console.log(err))

User.updateMany({name: "hulk"},{age: 10}).then((res)=>console.log(res)).catch((err)=>console.log(err))


