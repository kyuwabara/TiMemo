exports.execute = function() {
    var jasmine = require('spec/lib/jasmine-1.1.0').jasmine;
    var reporter = require('spec/lib/jasmine-titanium').TitaniumReporter;

    require('spec/test_main').run();

    jasmine.getEnv().addReporter(new reporter());
    jasmine.getEnv().execute();
};

