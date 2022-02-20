//Test file to run on node
for (let i = 0; i < 10; i++) {
    console.log("Hello,World!");
}

function echo(string, number) {
    for (let i = 0; i < number; i++) {
        console.log(string);
    }
}

echo("Echo!!!", 10);
echo("TIT FOR TAT", 3);

console.log("--------------------------------------------------------------");

function average(numArray) {
    let sum = 0;
    numArray.forEach((grade) => {
        sum += grade;
    });

    return sum / numArray.length;
}

let scores = [90, 98, 89, 100, 100, 86, 94]; //average = 94
let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]; //average = 68
console.log("Average of the first array: " + Math.round(average(scores)));
console.log("Average of the second array: " + Math.round(average(scores2)));

//Array that Contains:
//1. The node executable
//2. The name of the executed JS file
//3. any custom arguments passed as extra
console.log(process.argv);

//Working with files
const fs = require('fs');
//Create a directory
fs.mkdir("test", {recursive: true}, (err) => {
    if (err)
        throw err;
    console.log("Directory was created");
});

//Write a file (Synchronous)
try {
    fs.writeFileSync("examplefile.txt", "test test test");
}
catch (err) {
    throw err;
}