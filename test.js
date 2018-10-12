const assert = require('assert');
var fakeUa = require('./index');
let one = [];
let two = [];
for (var i = 0; i < 10; i++) {
  one.push(fakeUa())
}

for (var i = 0; i < 10; i++) {
  two.push(fakeUa())
}

assert.notDeepEqual(one, two, "error Equal")
console.log('pass test')

