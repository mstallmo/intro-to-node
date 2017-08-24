const request = require('request');
const fs = require('fs');
const zlib = require('zlib');

//const s = request("http://www.pluralsight.com/");
//s.pipe(process.stdout);

//request('http://www.pluralsight.com/').pipe(process.stdout);

//request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));
request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));