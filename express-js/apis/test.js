/********************
 *  Coded By Davoleo
 ********************/

const request = require("request");

request('http://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
    if (error) {
        console.error("Something is wrong :/", error)
    } else if (response.statusCode === 200) {
        const parsedBody = JSON.parse(body);
        //Template literals with a string (ES6)
        console.log(`${parsedBody.name} lives in ${parsedBody.address.city}`);
    }
})