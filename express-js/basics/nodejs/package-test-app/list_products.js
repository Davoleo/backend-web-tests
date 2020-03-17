/********************
 *  Coded By Davoleo
 ********************/

let faker = require('faker');

console.log("====================");
console.log("|     FAKE SHOP    |");
console.log("====================");

for (let i = 0; i < 10; i++) {
    let randProduct = faker.commerce.productName();
    let randPrice = faker.commerce.price();
    console.log(randProduct + " - €" + randPrice)
}
