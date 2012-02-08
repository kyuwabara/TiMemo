(function() {
    var tests_enabled = require('spec/enabled').tests_enabled;
    var ApplicationWindow = require('ui/ApplicationWindow');
    if (!tests_enabled) {
        new ApplicationWindow().open();
    } else {
        require('spec/tests').execute();
    }
})();

