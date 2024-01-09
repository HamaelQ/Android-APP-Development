// For Loop
console.log("For Loop:");
for (var i = 0; i < 5; i++) {
console.log(i);
}

// While Loop
console.log("\nWhile Loop:");
var counter = 0;
while (counter < 5) {
console.log(counter);
counter++;
}

// Do...While Loop
console.log("\nDo...While Loop:");
var doWhileCounter = 0;
do {
console.log(doWhileCounter);
doWhileCounter++;
} while (doWhileCounter < 5);

// For...In Loop (Object)
console.log("\nFor...In Loop (Object):");
var person = { name: "John", age: 30, city: "New York" };
for (var key in person) {
console.log(key + ": " + person[key]);
}

// For...Of Loop (Array)
console.log("\nFor...Of Loop (Array):");
var colors = ["red", "green", "blue"];
for (var color of colors) {
console.log(color);
}
