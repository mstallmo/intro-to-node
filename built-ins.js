const os = require('os');

let toMb = function (f) {
    return(Math.round((f/1024/1024)*100)/100);
};

console.log('Host: ' + os.hostname());
console.log('15 Min load average: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + 'Mb free');