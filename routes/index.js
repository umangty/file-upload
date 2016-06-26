var express = require('express')
var router = express.Router()
var multer  = require('multer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', multer({ storage: multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
  })
}).single('file'),function(req, res){
    res.status(204).end()
});

module.exports = router;
