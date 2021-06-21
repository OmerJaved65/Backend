Contact = require('./InfoModel');
exports.new = function (req, res) {
    var contact = new Contact();
    contact.date = req.body.date ? req.body.date : contact.date;
 
    contact.delivery = req.body.delivery;
    contact.delivery = req.body.delivery;

    contact.save(function (err) {
        
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New Info created!',
                data: contact
            });
    });
};