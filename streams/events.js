const EventEmitter = require('events').EventEmitter;

let getResource = function (c) {
    const e = new EventEmitter();
    process.nextTick(function () {
        let count = 0;
        e.emit('start');
        let t = setInterval(function () {
            e.emit('data', ++count);
            if (count === c) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
    return e;
};

let r = getResource(5);

r.on('start', function () {
    console.log("I've started");
});

r.on('data', function (d) {
    console.log(" I received data -> " + d);
});

r.on('end', function (t) {
    console.log("I'm done with " + t + " data events.");
});