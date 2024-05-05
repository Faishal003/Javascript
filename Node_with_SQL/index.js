const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();

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

app.get('/', (req, res)=>{
    let q = `SELECT COUNT(*) FROM user`;
    try {
    connection.query(q, (err, result)=>{
      if(err) throw err;
      console.log(result[0]["COUNT(*)"]);
      let val = result[0]["COUNT(*)"]
      res.send(`Total number of user is: ${val.toString()}`);
    });
  } catch (err) {
    console.log(err);
    res.send("Error Occured..");
  }
});

app.listen("8080", ()=>{
    console.log(`Listening to the port: 8080`);
})

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