const should = require('should');
const fun = require('./mathfun');

describe('MathFun', function() {
    describe('when used synchronously', function() {

        it('should double even numbers correctly', function () {
            fun.evenDoublerSync(2).should.equal(4);
        });

        it('should throw on odd numbers', function(done) {
            (function() {fun.evenDoublerSync(3)} ).should.throw(/Odd/);
            done();
        });

    });

    describe('when used asynchronously', function() {

        it('should double even numbers correctly', function (done) {
            fun.evenDoubler(2, function (err, results) {
                should.exist(results);
                should.not.exist(err);
                done();
            });
        });

        it('should return error on odd numbers', function(done) {
            fun.evenDoubler(3, function (err, results) {
                should.exist(err);
                should.not.exist(results);
                done();
            });
        });

    });
});