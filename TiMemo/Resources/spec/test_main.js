// I don't like this at all, but it beats having to call
// 'jasmine.it()' or 'jasmine.expect()' all the freaking time.
var j = require('spec/lib/jasmine-1.1.0');
var methods = ['spyOn',
               'it',
               'xit',
               'expect',
               'runs',
               'waits',
               'waitsFor',
               'beforeEach',
               'afterEach',
               'describe',
               'xdescribe'
               ];

for (var i = 0, l = methods.length; i < l;  i++) {
    var method = methods[i];
    this[method] = j[method];
    Ti.API.debug('require ' + method);
}

exports.run = function() {
    describe('datastore', function() {
        var datastore = require('service/datastore');

        it('can be reset by reset method.', function() {
            datastore.reset();
            var memos = datastore.getMemos();
            expect(memos.length).toBe(0);
        });
    });
};

