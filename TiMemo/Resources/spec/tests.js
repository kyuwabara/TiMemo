exports.execute = function() {
    var jasmine = require('spec/lib/jasmine-1.1.0').jasmine;
    var reporter = require('spec/lib/jasmine-titanium').TitaniumReporter;
    //jasmine.TitaniumReporter = tirep;

    // Include all the test files
    //Ti.include('/spec/test_main.js');

    for (name in jasmine) {
        Titanium.API.debug(name);
    }

    jasmine.getEnv().addReporter(new reporter());
    jasmine.getEnv().execute();
};

