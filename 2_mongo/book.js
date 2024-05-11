const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount:{
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

let book6 = new Book({
    title: "Dc comics V2",
    author: "Zack Snyder",
    price: "5000",
    genre: ["comics", "superhero", "fictional"]
});

book6.save().then((res)=>console.log(res)).catch((err)=>console.log(err))