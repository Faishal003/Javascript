const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require('./models/listing.js');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
.then(()=> console.log("connection successfull to the database"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
}

app.get('/', (req, res)=>{
    res.send("welcome to homepage.")
});

//sample testing listing
app.get('/testlisting', async (req, res)=>{
  let sampleListing = new Listing({
    title: "My new Villa",
    description: "by the beach",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "COX's Bazar",
    country: "Bangladesh",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("testing successfull")
})

app.listen(8080, (req, res)=>{
    console.log("server is listening on port 8080: ")
});