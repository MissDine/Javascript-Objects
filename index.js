// OBJECTS
let user = {
    name: "Enid",
    age : 25,
    email:"enidnyatichi1212@gmail.com",
    projects:["tv show app","budget tracker"],
    gender:"Female"
}
console.log(user);
// We can access a property in the object by using the dot notation for instance user.name etc
console.log(user.name);
console.log(user.projects);
// We can as well change or overwrite some object values for instance
user.age = 16
console.log(user.age);
// WE can also access and change the various properties using the []
console.log(user["name"]);

user["name"] = "Nyatichi"
console.log(user.name);

console.log(typeof user);

// ADDING METHODS TO OBJECTS
let users = {
    name: "Enid",
    age : 25,
    email:"enidnyatichi1212@gmail.com",
    projects:["tv show app","budget tracker"],
    gender:"Female",
    login:function () {
        console.log("User logged in");
    },
    // We should always use a regular function when using the this key word.This is due to scope issues
    logProjects: function () {
        // console.log(this.projects);; 
        console.log("This use has done the following:")
        this.projects.forEach(project => {
            console.log(project);
        });
    }
}
users.login()
users.logProjects()

const Name = "Mark Isreal"
names = Name.toUpperCase()
console.log(names);

// Storing objects in arrays
const books = [{title:"The river and the source", author:"Margret Ogola", reads: 1000},
{title:"Kidagaa kimemwozea",author:"Ken Walibora",reads:1000}
]
// console.log(books);
let Users = {
    name: "Enid",
    age : 25,
    email:"enidnyatichi1212@gmail.com",
    projects:["tv show app","budget tracker"],
    gender:"Female",
    login:function () {
        console.log("User logged in");
    },
    books:[{title:"The river and the source", author:"Margret Ogola", reads: 1000},
{title:"Kidagaa kimemwozea",author:"Ken Walibora",reads:1000}
]
}   
console.log(Users.title,users.reads); 

// Math objects
console.log(Math);
console.log(Math.PI);

const area = 7.7
// Math methods
// Rounding off a number
console.log(Math.round(area));
// Floor-rounds it down no matter the figure eg 7.9 = 7
console.log(Math.floor(area));
// Ceil- Opposite of floor rounds it up regardless of the number
const circum = 12.3
console.log(Math.ceil(circum));
// Trunc-this takes away the decimal
console.log(Math.trunc(circum));

// Random numbers
// Math.randomm generates random numbers between 0 and 1
const random = Math.random()
console.log(random);
// Generating a random number between 1-100
console.log(Math.round(random*100));

// PRIMITIVE AND REFERENCE TYPES
// Primitive types
// Numbers,strings, boolean,undefined,symbols,, null

// Reference/ Non-primitive
// All types of objects,arrays,lists,functions ,dates,object literals,all objects etc
// Stack-stores primitive values because of limited space
// Heap-stores non-primitive values because its space is not limited