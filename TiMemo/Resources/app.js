(function() {
    var tests_enabled = require('spec/enabled').tests_enabled;
    var ApplicationWindow = require('ui/ApplicationWindow');
    var app = new ApplicationWindow(tests_enabled);
    app.fireEvent('start');
})();

