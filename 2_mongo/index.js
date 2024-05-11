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

//delete and deletemany
// User.deleteOne({name: "hulk"}).then((res)=>console.log(res)).catch((err)=>console.log(err))
// User.deleteMany({age: 100}).then((res)=>console.log(res))

// User.findByIdAndDelete("663be5f8b9bbf3d52c7ea616").then((res)=>console.log(res))

User.findOneAndDelete({name: "captain marvel"}).then((res)=>console.log(res))