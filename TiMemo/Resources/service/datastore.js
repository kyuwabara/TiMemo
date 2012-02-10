var Memo = require('model/Memo');

var saved = Ti.App.Properties.getString('db');
var datastore;
if (saved) {
    datastore = JSON.parse(saved);
} else {
    datastore = [];
}

exports.getMemos = function() {
    return datastore.slice(0);
};

exports.saveMemo = function(memo) {
    if (memo.utc !== 0) {
        // update
        for (var i = 0, len = datastore.length; i < len; i++) {
            var oldMemo = datastore[i];
            if (memo.utc === oldMemo.utc) {
                datastore[i] = memo;
                break;
            }
        }
    } else {
        // insert new memo
        memo.utc = new Date().getTime();
        datastore.push(memo);
    }
    Ti.App.Properties.setString('db', JSON.stringify(datastore));
};

exports.reset = function() {
    datastore = [];
    Ti.API.debug('clear database... done.');
};

