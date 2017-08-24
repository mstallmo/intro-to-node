const request = require('request');

const s = request('http://www.pluralsight.com/');

s.on('data', function(chunk) {
    console.log(">>>Data>>> " + chunk);
});

s.on('end', function () {
    console.log(">>>Done!>>>");
});