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

// const User = mongoose.model("User", userSchema);

// User.find({age: {$gt: 30}})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

const User = mongoose.model("User", userSchema);

User.findById("663be5f8b9bbf3d52c7ea616")
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
