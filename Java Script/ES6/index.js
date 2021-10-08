// Variable creation using let and const

let firstname = 'john';

const lastName = "tom"; //These values can't be changed later on


// New String meathod
const mGreetings = `Hello ${firstname}`;

console.log(mGreetings);

function getFullName(firstname, lastName) {
    return `${firstname}, ${lastName}`;
}


// Arrow Function:-

//Old way of creating function
function Greetings () {
    return `welcome ${firstname}`;
}

//New way of creating function
const Greetings1 = (name) => {
    return `welcome ${firstname}`;
}



// Array Function : Filter()

mArray = [1, 3, 4, 2, 5, 6, 7];

const resultArr = mArray.filter(item => {
    return true;
})

console.log(resultArr);

// Array Function : Find()

// const result = mArray.find(item => {
//     return (item % 2 === 0 && item >= 0);
// })

// console.log ('result =>', result)


// Array Function : FindIndex()

const result = mArray.findIndex(item => {
    return (item % 2 === 0 && item >= 0);
})

console.log ('index =>', result)

// class in JavaScript

// Old way of using constructor

// function Person(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;

//     this.getDetails = function() {
//         return "Name: " + this.name + " and Age: " + (2019 - this.yearOfBirth);

//     }
// }

// var john = new Person('John', 1990);
// console.log(john.getDetails);

// Using Classes

// class Person {
//     constructor(name, birthYear) {
//         this.name = name;
//         this.yearOfBirth = birthYear;
        
//     }
    
//     getDetails = () => {
//         return `Name: ${this.name} and Age: ${2019 - this.yearOfBirth}`;
//     }
// }

// var john = new Person('John', 1990);
// console.log(john.getDetails());

//Inheritance in ES6


class Person {
        constructor(name, birthYear) {
            this.name = name;
            this.yearOfBirth = birthYear;
            
        }
        
        getDetails = () => {
            return `Name: ${this.name} and Age: ${2019 - this.yearOfBirth}`;
        }
    }


class Pilot extends Person{
    constructor(exp, type, license) {
        super('John Wick', 1980)
        this.experience = exp;
        this.type = type;
        this.license = license;
    }

    getData = () => {
        console.log(`Experience: ${this.experience}  Type: ${this.type}
        License: ${this.license}`);
    }
}

const john = new Pilot(10, 'private', 'TC1234');
console.log(john)
john.getData();
