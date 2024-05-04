const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

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

//Inserting New data
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for(i = 0; i < 100; i++){
    data.push(getRandomUser());
}

try {
  connection.query(q, [data], (err, result)=>{
    if(err) throw err;
    console.log(result);
    console.log(result.length);
  });
} catch (err) {
  console.log(err);
}

connection.end();