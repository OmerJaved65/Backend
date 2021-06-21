let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var InfoController = require('./InfoController');

router.route('/contacts')
.post(InfoController.new);


module.exports = router;