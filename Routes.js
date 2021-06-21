let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to My node JS task',
    });
});

var InfoController = require('./InfoController');

router.route('/contacts')
.post(InfoController.new);


module.exports = router;