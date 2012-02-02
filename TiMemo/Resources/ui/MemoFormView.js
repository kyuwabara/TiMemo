function MemoFormView() {
    // load modules
    var datastore = require('service/datastore');
    var Memo = require('model/Memo');

    // create view instance
    var self = Ti.UI.createView({
        backgroundColor: '#999999',
        height: '180dp'
    });

    // create UI part: title textfield
    var titleField = Ti.UI.createTextField({
        hintText:'title',
        top: '5dp',
        left: '5dp',
        height: '50dp',
        width: '200dp',
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        autocapitalization: false
    });
    self.add(titleField);

    titleField.addEventListener('return', function() {
        titleField.blur();
    });

    // create UI part: save button
    var button = Ti.UI.createButton({
        top: '5dp',
        right: '5dp',
        height: '50dp',
        width: '105dp',
        title: 'save'
    });
    self.add(button);

    // create UI part: description textarea
    var descArea = Ti.UI.createTextArea({
        editable: true,
        bottom: '5dp',
        left: '5dp',
        right: '5dp',
        height: '115dp',
        font: {fontSize: 20},
        color: 'black',
        textAlign: 'left',
        borderWidth: 2,
        borderColor: '#bbb',
        borderRadius: 5,
        suppressReturn: false,
        autocapitalization: false
    });
    self.add(descArea);

    // extra part: hint label in textarea
    var hintLabel = Ti.UI.createLabel({
        text: 'description',
        color: 'gray',
        textAlign: 'left',
        left: '3%',
        top: '10%',
        height: '20%',
        width: '100%',
        backgroundColor: 'transparent',
        touchEnabled: true
    });
    descArea.add(hintLabel);

    // hand over a click event
    hintLabel.addEventListener('click', function() {
        descArea.focus();
    });

    // hintText on/off
    descArea.addEventListener('change', function(e) {
        if (e.source.value.length > 0) {
            hintLabel.hide();
        } else {
            hintLabel.show();
        }
    });

    // save
    button.addEventListener('click', function(e) {
        var title = titleField.value;
        var desc = descArea.value;
        if ((title.length !== 0) && (desc.length !== 0)) {
            var memo = new Memo(title, desc);
            datastore.saveMemo(memo);
            self.fireEvent('memoSaved');
            titleField.blur();
            titleField.value = '';
            descArea.blur();
            descArea.value = '';
        }
    });

    return self;
}

module.exports = MemoFormView;

