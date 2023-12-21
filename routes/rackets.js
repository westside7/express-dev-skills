var express = require('express');
var router = express.Router();
var racketCtrl = require('../controllers/rackets')

router.get('/', racketCtrl.index);

router.get('/new', racketCtrl.new);

router.get('/:id', racketCtrl.show);

router.get('/:id/edit', racketCtrl.edit);

router.post('/', racketCtrl.create);

router.delete('/:id', racketCtrl.delete);

router.put('/:id', racketCtrl.update);

module.exports = router;