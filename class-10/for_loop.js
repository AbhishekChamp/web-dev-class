// A for loop is used when you know how many times you want to repeat something

/*
Syntax:

for (initialization; condition; update) {
    code to repeat
}
*/

// Print square of numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    let square = i * i;
    console.log("Number: ", i, "Square: ", square);
}

// Print numbers 5 to 1 in reverse
console.log("Reverse");
for (let i = 5; i >= 1; i--) {
    console.log("Number: ", i);
}
