exports.execute = function() {
    var jasmine = require('/spec/lib/jasmine-1.1.0');
    Ti.include('/spec/lib/jasmine-titanium.js');

    // Include all the test files
    Ti.include('/spec/test_main.js');

    for (name in jasmine) {
        Titanium.API.debug(name);
    }

    jasmine.jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
    jasmine.jasmine.getEnv().execute();
};

