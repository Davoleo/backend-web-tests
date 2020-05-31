/********************
 *  Coded By Davoleo
 ********************/

const request = require("request");

request('http://www.googledakjsdksj.com', function (error, response, body) {
    if (error) {
        console.error("Something is wrong :/")
        console.error(error);
    } else if (response.statusCode === 200) {
        console.log(body);
    }
})