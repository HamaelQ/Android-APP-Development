// Using var
console.log("Using var, x:", x);

if (true) {
    var x = 10;
}
console.log("Outside var, x:", x);

// Using let
if (true) {
    let y = 20;
    console.log("Using let, y:", y);
}
// console.log("Outside let, y:", y); // Uncommenting this line will result in an error

// Using const
const z = 30;
// z = 40; // Uncommenting this line will result in an error
console.log("Using const, z:", z);
