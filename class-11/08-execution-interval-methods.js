// Execution Interval Methods

// setTimeout() - Runs once after a delay
setTimeout(function () {
    console.log("Hello after 3 seconds");
}, 3000);

// setInterval - Run repeatedly
let timer = setInterval(function () {
    console.log("Repeating every 2 seconds");
    clear();
}, 2000);

function clear() {
    clearInterval(timer);
}
