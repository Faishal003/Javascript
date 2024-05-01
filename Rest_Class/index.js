const express = require("express");
const app = express();
const path = require("path")
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
    {
        username: "faishal ahmed emon",
        content: "This is all about programming.",
    },
    {
        username: "Captain america",
        content: "I can do this all day long.",
    },
    {
        username: "bubin",
        content: "Arise a bug in that banking project.",
    }
]


app.get('/posts', (req, res)=>{
    res.render("index.ejs", {posts});
})

app.listen(port, ()=>{
    console.log(`Listening to the port: ${port}`);
})