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
        min: [1,"Minimum price should be 1"],
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

Book.findByIdAndUpdate('663f0a340a5b5a5ae363b942', {price: -1}, {runValidators: true})
.then((res)=>console.log(res))
.catch((err)=>console.log(err.errors.price.properties.message))