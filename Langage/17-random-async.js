const fs = require('fs');

fs.readFile('a.txt', (err, buffer) => {
    console.log(buffer.toString())
});


fs.readFile('b.txt', (err, buffer) => {
    console.log(buffer.toString())
});
