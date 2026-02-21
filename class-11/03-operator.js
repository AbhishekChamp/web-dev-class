// Operators

// 1. Arithemetic Operators
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2. Logical Operators
console.log("AND Operator");
// AND (&&) - Both conditions must be true
let age = 17;
let studentID = true;

if (age <= 18) {
    if (studentID) {
        console.log("Allowed to enter");
    }
}

if (age <= 18 && studentID) {
    console.log("Allowed to enter");
}

// If there is only one line inside if statement, then parenthesis can be omitted
if (age <= 18 && studentID) console.log("Allowed to enter");

console.log("OR Operator");
// OR (||) - At least one condition must be true
let isHoliday = true;
let isFriday = false;
let isSaturday = true;

if (isHoliday) {
    console.log("No school today");
} else if (isFriday) {
    console.log("No school today");
} else if (isSaturday) {
    console.log("No school today");
}

if (isHoliday || isFriday || isSaturday) {
    console.log("No school today");
}

if (isHoliday || isFriday || isSaturday) console.log("No school today");

console.log("NOT Operator");
// NOT (!) - Reverses the value
let isAbsent = false;

if (isAbsent) {
    console.log("Student is absent");
} else {
    console.log("Student is present");
}

if (!isAbsent) {
    console.log("Student is present");
}

// Comparison Operators
console.log("COMPARISON OPERATORS");
console.log(5 == "5");
console.log(5 === "5");
console.log("--------");
console.log(5 != 4);
console.log(5 != "4");
console.log("########");
console.log(10 > 5);
console.log(10 < 5);
console.log("_____________");
console.log("10 >= 10");
console.log(10 >= 10);
console.log(5 <= 10);

// Ternary Operator (Shortcut if-else)
age = 17;

if (age >= 18) {
    console.log("They can vote");
} else {
    console.log("They cannot vote");
}

console.log(age >= 18 ? "They can vote" : "They cannot vote");

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
