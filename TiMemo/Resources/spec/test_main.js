(function(){
    var j = require('/spec/lib/jasmine-1.1.0');

    // I don't like this at all, but it beats having to call 'jasmine.it()' or 'jasmine.expect()' all the freaking time.
    for (name in j) {
        this[name] = j[name];
    }

    // To learn how to write Jasmine tests, please read Jasmine documentation:
    // https://github.com/pivotal/jasmine/wiki

    describe('Javascript Array.', function() {
        var arr = [1,2,3,4];
        it('has length property', function() {
            expect(arr.length).toBe(4);
        });
    });

})();
