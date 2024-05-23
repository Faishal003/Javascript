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

//Index route
app.get('/listing', async (req, res)=>{
  const allListing = await Listing.find({});
  res.render("listing/index.ejs", {allListing});
})

app.listen(8080, (req, res)=>{
    console.log("server is listening on port 8080: ")
});