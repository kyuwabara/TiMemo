function ApplicationWindow(test_enable) {
    var MemoFormView = require('ui/MemoFormView');
    var MemoTableView = require('ui/MemoTableView');

    var self = Ti.UI.createWindow({
        backgroundColor: 'white',
        exitOnClose: true
    });

    var memoForm = new MemoFormView();
    memoForm.top = 0;
    self.add(memoForm);

    var memoTable = new MemoTableView();
    memoTable.top = '180dp';
    self.add(memoTable);

    memoForm.addEventListener('memoSaved', function() {
        memoTable.fireEvent('memoAdded');
    });

    return self;
}

module.exports = ApplicationWindow;

