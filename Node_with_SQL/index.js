const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "firstdb",
    password: "1221",
})

//Inserting New data
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
    ['1', 'a', 'a@gmail.com', '123'],
    ['2', 'b', 'b@gmiail.com', '123']
]

try {
  connection.query(q, [users], (err, result)=>{
    if(err) throw err;
    console.log(result);
    console.log(result.length);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

console.log(getRandomUser());