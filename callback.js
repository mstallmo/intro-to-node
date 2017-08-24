const maxTime = 1000;

let evenDoubler = function(v, callback){
    let waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2){
        setTimeout(function() {
            callback(new Error("Odd Input"));
        }, waitTime);
    }
    else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

let handleResults = function (err, results, time ) {
    if (err) {
        console.log("Error: " + err.message);
    }
    else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

(function () {
    let count = 1;
    for (let i = 0; i < 10; ++i) {
        console.log("Calling evenDoubler for value " + i);

        evenDoubler(i, handleResults);

        if (++count === 10) {
            console.log("Done!");
        }
    }
}());


console.log("------");