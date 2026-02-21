// Conditional Statements

let marks = 80;
// if => Check only one condition
if (marks >= 50) {
    console.log("Pass");
}

// if-else => Check for a condition and have a fallback
if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// else-if => Multiple checks
if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 75) {
    console.log("B Grade");
} else {
    console.log("C Grade");
}

// Switch Statement
console.log("#########");
let day = "Sunday";

switch (day) {
    // if (day == "Sunday")
    case "Sunday":
        console.log("Start of week");
        break;
    // if (day == "Friday")
    case "Friday":
        console.log("Weekend");
        break;
    // else
    default:
        console.log("Normal day");
}

console.log("#########");

let num = 20;

switch (num) {
    case 20:
        console.log("equal to than 20");
}
