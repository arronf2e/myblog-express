/**
 * Created by Arron on 16/12/6.
 */
const express = require('express');
const router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET  /signout 登出
router.get('/', checkLogin, function (req,res,next) {
    req.session.user = null;
    req.flash('success', '登出成功');
    res.redirect('/posts');
});

module.exports = router;