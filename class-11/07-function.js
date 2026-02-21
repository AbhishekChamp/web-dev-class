// Functions - Functions are reusable block of code
// Like a machine which performs a task when called

// SYNTAX
// Defining a function - function <function_name>(args) { // code to be executed return }
// Calling a function - <function_name>()

function greet() {
    console.log("Good Afternoon");
}

greet();

function add(a, b) {
    // console.log(a + b);
    return a + b;
}

console.log(add(5, 3));

// Function with default value
function customMultiply(a, b = 5) {
    return a * b;
}

console.log(customMultiply(10));
console.log(customMultiply(10, 10));

// Avoid this type of function declaration
function customMultiply2(a = 5, b) {
    return a * b;
}

console.log(customMultiply2(10));
console.log(customMultiply2(10, 10));
