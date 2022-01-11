const router = require('express').Router();
const {index,admin,login,noEntry} = require('../controllers/mainController')

const accessAdmin = require('../middleware/accessAdmin')

router
.get('/', index)
.get('/admin',accessAdmin , admin)
.get('/login', login)
.get('/noEntry',noEntry)
    
module.exports = router;