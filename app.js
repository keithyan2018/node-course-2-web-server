console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Keith'));
//var res = notes.addNote();
//console.log(res);

//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//  if (err) {
//    console.log('Unable to write to file');
//  }
//});

//fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
