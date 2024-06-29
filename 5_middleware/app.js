const express = require("express");
const app = express();

app.use((req, res, next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
})


app.get("/", (req, res)=>{
    res.send("This is the root page");
});

app.get("/random", (req, res)=>{
    res.send("This is the random page.");
});

//404 not found
app.use((req, res)=>{
    res.send("Page not found");
})

app.listen(8080, ()=>{
    console.log("Server is listening to the port 8080");
});