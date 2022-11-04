const express = require('express');
const router = express.Router();
const { UserGet } = require("./appUser");

router.get('/user/login', function(req, res){
    var phone = req.params.phone;
    UserGet(phone,res);
})

module.exports = router