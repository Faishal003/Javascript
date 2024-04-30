//factory method

// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };

//     return person;
// }

//problem is create a different object using factory method...



//Constructor - does not return anything and start with capital
//thats the better way to handle objects
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);
// }


//best way is Classes

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi, my name is ${this.name}`);
    };
}

let p1 = new Person("faishal", 25);
let p2 = new Person("ahmed", 27); 