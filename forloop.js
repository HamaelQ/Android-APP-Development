// Sample array
var colors = ["red", "green", "blue"];

// Using for...in loop
console.log("Using for...in loop:");
for (var index in colors) {
console.log(index, colors[index]);
}

// Using for...of loop
console.log("\nUsing for...of loop:");
for (var color of colors) {
console.log(color);
}
