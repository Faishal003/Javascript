const express = require("express");
const app = express();
const path = require("path")
const port = 8080;

const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
    {
        id: uuidv4(),
        username: "faishal ahmed emon",
        content: "This is all about programming.",
    },
    {
        id: uuidv4(),
        username: "Captain america",
        content: "I can do this all day long.",
    },
    {
        id: uuidv4(),
        username: "bubin",
        content: "Arise a bug in that banking project.",
    }
]

app.get('/posts', (req, res)=>{
    res.render("index.ejs", {posts});
})
app.get('/posts/new', (req, res)=>{
    res.render("form.ejs");
})
app.post('/posts', (req, res)=>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect('/posts');
})
app.get('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id)
    console.log(post);
    res.render("show.ejs", {post});
})

app.listen(port, ()=>{
    console.log(`Listening to the port: ${port}`);
})