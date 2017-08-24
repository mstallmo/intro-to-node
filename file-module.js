const mathFun = require('./mathfun');

let processResults = function (err, results, time) {
    if (err) {
        console.log("Error:" + err.message);
    }
    else {
        console.log("The results are: " + results + " (" + time +" ms)");
    }
};

for (var i = 0; i <10; i++) {
    console.log("Calling 'evenDoubler' with parameter '" + i +"'");
    mathFun.evenDoubler(i, processResults);
}

console.log("-----");
console.log("The foo variable from 'mathFun =  " + mathFun.foo);