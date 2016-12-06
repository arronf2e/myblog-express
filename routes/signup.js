/**
 * Created by Arron on 16/12/6.
 */
const express = require('express');
const router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET  /signup 注册页
router.get('/', checkNotLogin, function (req,res,next) {
    res.render('signup');
});

// POST /signup 用户注册
router.post('/', checkNotLogin, function (req, res, next) {
    res.send(req.flash());
});

module.exports = router;