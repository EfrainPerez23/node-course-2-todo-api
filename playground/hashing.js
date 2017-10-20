let { SHA512 } = require('crypto-js');
let jwt = require('jsonwebtoken');

var data = {
    id: 10
};



var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);
// jwt.verify


// var message = "I am User number 3";

// var hash = SHA512(message).toString();
// console.log(`Message ${message}`);
// console.log(`HASH ${hash}`);


// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA512(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA512(JSON.stringify(token.data)).toString();

// var resultHash = SHA512(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     return console.log('Data was not changed');
// }

// return console.log('Data was changed. Do not Trust');