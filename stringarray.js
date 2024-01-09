// Sample array of strings
var stringArray = ["car", "bike", "truck", "loader"];

// Join array elements into a single string
var joinedString = stringArray.join(', ');
console.log("Joined String:", joinedString);

// Add a new string to the array
stringArray.push("cycle");
console.log("Array after push:", stringArray);

// Remove the last string from the array
var removedString = stringArray.pop();
console.log("Removed String:", removedString);
console.log("Array after pop:", stringArray);

// Find the index of a specific string
var indexOfOrange = stringArray.indexOf("bike");
console.log("Index of 'orange':", indexOfOrange);

// Check if the array includes a specific string
var includesBanana = stringArray.includes("banana");
console.log("Includes 'banana':", includesBanana);

// Map over each string and convert to uppercase
var uppercasedArray = stringArray.map(function(str) {
return str.toUpperCase();
});
console.log("Uppercased Array:", uppercasedArray);


