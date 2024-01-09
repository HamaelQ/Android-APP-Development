// Addition function
function add(x, y) {
    return x + y;
}

// Subtraction function
function subtract(x, y) {
    return x - y;
}

// Multiplication function
function multiply(x, y) {
    return x * y;
}

// Division function
function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Error: Division by zero is undefined.";
    }
}

// Example usage
let a = 10;
let b = 5;

let addResult = add(a, b);
let subtractResult = subtract(a, b);
let multiplyResult = multiply(a, b);
let divideResult = divide(a, b);

console.log(`Addition: ${a} + ${b} = ${addResult}`);
console.log(`Subtraction: ${a} - ${b} = ${subtractResult}`);
console.log(`Multiplication: ${a} * ${b} = ${multiplyResult}`);
console.log(`Division: ${a} / ${b} = ${divideResult}`);
