const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true})); //can understand the req for all..work as a middleware.
app.use(express.json()) //if req is in json file then 

//all query is visible in the url
app.get('/register', (req, res)=>{
    let {user, password} = req.query;
    res.send(`get req added successfully. Welcome @${user}`);  
})

//req.body contain all the req message
app.post('/register', (req, res)=>{
    let {user, password} = req.body;
    console.log(req.body);//express does not understand the req..so req should be parsed.
    res.send(`post req added successfully. Welcome @${user}`);
})

app.listen(port, ()=>{
    console.log(`Listening to the port: ${port}`);
})



