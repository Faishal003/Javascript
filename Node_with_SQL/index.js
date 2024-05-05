const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "firstdb",
    password: "1221",
})

let getRandomUser = ()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ]
  };

//homepage
app.get('/', (req, res)=>{
    let q = `SELECT COUNT(*) FROM user`;
    try {
    connection.query(q, (err, result)=>{
      if(err) throw err;
      console.log(result[0]["COUNT(*)"]);
      let val = result[0]["COUNT(*)"]
    //   res.send(`Total number of user is: ${val.toString()}`);
    res.render("home.ejs", {val});
    });
  } catch (err) {
    console.log(err);
    res.send("Error Occured..");
  }
});

//fetch user table all info
app.get("/users", (req, res)=>{
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users)=>{
          if(err) throw err;
          res.render("fetchuser.ejs", {users});
        });
      } catch (err) {
        console.log(err);
        res.send("Error Occured..");
      }
});

//edit user information
app.get("/users/:id/edit", (req, res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result)=>{
          if(err) throw err;
          let user = result[0];
          res.render("edituser.ejs", {user});
        });
      } catch (err) {
        console.log(err);
        res.send("Error Occured..");
      }
});

//update (db) 
app.patch("/users/:id", (req, res)=>{
    let {id} = req.params;
    let {password: formPassword, username: newUsername} = req.body;

    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result)=>{
          if(err) throw err;
          let user = result[0];

          if(formPassword != user.password){
            res.send("WRONG PASSWORD");
          }else{
            let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
            connection.query(q2, (err, result)=>{
                if(err) throw err;
                res.redirect("/users");
            });
          }
        });
      } catch (err) {
        console.log(err);
        res.send("Error Occured..");
      }
})

app.listen("8080", ()=>{
    console.log(`Listening to the port: 8080`);
})

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];
// for(i = 0; i < 100; i++){
//     data.push(getRandomUser());
// }

// try {
//     connection.query(q, [data], (err, result)=>{
//       if(err) throw err;
//       console.log(result);
//       console.log(result.length);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// connection.end();