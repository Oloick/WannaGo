/**
 * Created by user on 14/03/2017.
 */

var router = require('express').Router();
var jwt = require('jsonwebtoken');

router.get('/', function(req,res){
    res.render('index.ejs');
});
module.exports = router;