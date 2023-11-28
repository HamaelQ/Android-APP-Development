// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Increment:", ++a);
console.log("Decrement:", --b);

// Assignment Operators
console.log("\nAssignment Operators:");
let c = a;
console.log("Assign:", c);
c += b;
console.log("Add and Assign:", c);
c -= b;
console.log("Subtract and Assign:", c);
c *= b;
console.log("Multiply and Assign:", c);
c /= b;
console.log("Divide and Assign:", c);

// Reset values for post-increment and post-decrement
a = 10;
b = 5;
// Pre-increment and Pre-decrement
console.log("\nPre-increment and Pre-decrement:");
let preIncrementA = ++a;
let preDecrementB = --b;

console.log("After pre-increment, a =", a, "and preIncrementA =", preIncrementA);
console.log("After pre-decrement, b =", b, "and preDecrementB =", preDecrementB);

// Reset values for post-increment and post-decrement
a = 10;
b = 5;

// Post-increment and Post-decrement
console.log("\nPost-increment and Post-decrement:");
let postIncrementA = a++;
let postDecrementB = b--;

console.log("After post-increment, a =", a, "and postIncrementA =", postIncrementA);
console.log("After post-decrement, b =", b, "and postDecrementB =", postDecrementB);

// Comparison Operators
console.log("\nComparison Operators:");
console.log("Equal to:", a == b);
console.log("Not equal to:", a != b);
console.log("Strict equal to:", a === b);
console.log("Strict not equal to:", a !== b);
console.log("Greater than:", a > b);
console.log("Less than:", a < b);
console.log("Greater than or equal to:", a >= b);
console.log("Less than or equal to:", a <= b);



// Logical Operators
console.log("\nLogical Operators:");
let isTrue = true;
let isFalse = false;
console.log("Logical AND:", isTrue && isFalse);
console.log("Logical OR:", isTrue || isFalse);
console.log("Logical NOT:", !isTrue);

// Ternary Operator
console.log("\nTernary Operator:");
let result = (a > b) ? "a is greater" : "b is greater";
console.log(result);
