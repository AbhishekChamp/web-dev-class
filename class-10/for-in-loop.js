// for...in loop is used to loop through properties of an object

const student = {
    name: "Nethra",
    class: 12,
    grade: "A",
};

console.log(student);

for (let key in student) {
    console.log(key);
}

console.log("-----------------");
for (let key in student) {
    console.log(key + ":" + student[key]);
}
