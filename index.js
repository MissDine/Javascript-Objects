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
    }
}
users.login()

const Name = "Mark Isreal"
names = Name.toUpperCase()
console.log(names);