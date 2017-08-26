const exec = require('child_process').exec;

let child = exec('systeminfo | find "Boot Time"', function(err, stdout, stderr) {
    if (err) {
        console.log("Error" + stderr);
    }
    else {
        console.log('Output is: ' + stdout);
    }
});

console.log("PID is " + child.pid);