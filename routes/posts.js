var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

// GET /posts 所有用户或者特定用户的文章页
router.get('/', function(req,res,next) {
    res.send(req.flash())
});

// POST /posts 发表一篇文章
router.post('/', checkLogin, function(req,res,next) {
    res.send(req.flash())
});

// GET /posts/create 发表文章页
router.post('/create', checkLogin, function(req,res,next) {
    res.send(req.flash())
});

// GET /posts/:postId  单独一篇的文章页
router.get('/:postId', function(req,res,next) {
    res.send(req.flash())
});

// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, function(req,res,next) {
    res.send(req.flash())
});

// GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, function(req,res,next) {
    res.send(req.flash())
});

// POST /posts/:postId/comment 创建一条留言 
router.post('/:postId/comment', checkLogin, function(req,res,next) {
    res.send(req.flash())
});

// GET /posts/:postId/comment/:commentId/remove
router.get('/:postId/comment/:commentId/remove', function(req,res,next) {
    res.send(req.flash())
});

module.exports = router;