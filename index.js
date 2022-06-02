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
    // We should always use a normal function when using the this key word.This is due to scope issues
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
// console.log(this);

// const Name = "Mark Isreal"
// names = Name.toUpperCase()
// console.log(names);
