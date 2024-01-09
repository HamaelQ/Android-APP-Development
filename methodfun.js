// Regular function declaration
function regularFunction(name) {
return "Hello, " + name + "!";
}
// Function expression
var functionExpression = function(name) {
return "Hello, " + name + "!";
};
// Arrow function (ES6)
var arrowFunction = (name) => {
return "Hello, " + name + "!";}; 
// Example usage of the functions
console.log(regularFunction());           
console.log(functionExpression());        
console.log(arrowFunction());              



// Creating an object representing a person
/*A method is a function that is associated with an object. In JavaScript, a method 
is simply a property of an object that is a function. It is defined within the object and
can be called on that object to perform a specific action.*/

var person = {
    firstName: "Hamael",         //property  firstName: "Hamael"
    lastName: "Qayyum",        
    rollNo: 2778,              

// Method to get the full name of the person
fullName: function() {
    return this.firstName + " " + this.lastName;
}
};
// Accessing object properties using dot notation
console.log(person.firstName); // Output: Hamael
// Accessing object properties using square brackets
console.log(person["lastName"]); // Output: Qayyum
// Calling a method of the object
console.log(person.fullName()); // Output: Hamael Qayyum
// Printing the updated roll number
console.log("Roll No:", person.rollNo); // Output: Roll No: 2778

