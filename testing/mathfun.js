const maxTime = 1000;

function evenDoubler (v, callback) {
    const waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2) {
        setTimeout(function() {
            callback(new Error("Odd Input"));
        }, waitTime);
    }
    else {
        setTimeout(function () {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

function evenDoublerSync (v) {
    if (v % 2) {
        throw(new Error("Odd Input"));
    }
    else {
        return (v * 2);
    }
}

module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;
module.exports.foo = "bar";