function MemoTableView() {
    var datastore = require('service/datastore');

    var self = Ti.UI.createTableView({
        data:[{title: 'nodata...'}]
    });

    var memos = [];

    function loadData() {
        var tableData = [];
        memos = datastore.getMemos();

        for (var i = 0, len = memos.length; i < len; i++) {
            var memo = memos[i];
            tableData.push({
                title: memo.title,
                memo: memo
            });
        }
        self.setData(tableData);
    }

    // click event: show description
    self.addEventListener('click', function(e) {
        var memo = memos[e.index];
        var dialog = Ti.UI.createAlertDialog();
        dialog.setTitle(memo.title);
        dialog.setMessage(memo.desc);
        dialog.show();
    });

    // reload data when memo added
    self.addEventListener('memoAdded', loadData);

    // first load
    loadData();

    return self;
}

module.exports = MemoTableView;

