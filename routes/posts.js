/**
 * Created by Arron on 16/12/6.
 */
const express = require('express');
const router = express.Router();
const PostModel = require('../models/posts');
const checkLogin = require('../middlewares/check').checkLogin;

// GET /posts 所有用户或者特定用户的文章页
router.get('/', function (req,res,next) {
    var author = req.query.author;
    PostModel.getPosts(author)
        .then(function (posts) {
            res.render('posts', {
                posts: posts
            })
        })
        .catch(next);
});

// GET  /posts/create 发表文章页
router.get('/create', checkLogin, function (req, res, next) {
    res.render('create')
});

// POST /posts 发表一篇文章
router.post('/', checkLogin, function (req, res, next) {
    var author = req.session.user._id;
    var title = req.fields.title;
    var content = req.fields.content;

    // 校验参数
    try {
        if(!title.length) {
            throw new Error('请填写标题');
        }
        if(!content.length) {
            throw new Error('请填写内容');
        }
    }catch (e) {
        req.flash('error', e.message);
        return res.redirect('back');
    }
    var post = {
        author: author,
        title: title,
        content: content,
        pv: 0
    };
    PostModel.create(post)
        .then(function (result) {
            // 此post是插入mongodb后的值，包含 _id
            post = result.ops[0];
            req.flash('success', '发表成功');
            // 跳转到该文章页
            res.redirect('/post/${post._id}');
        })
        .catch(next);
});

// GET /posts/:postId 文章详情
router.get('/:postId', function (req, res, next) {
    var postId = req.params.postId;
    Promise.all([
        PostModel.getPostById(postId),  //获取文本信息
        PostModel.incPv(postId)   // pv+1
    ]).then(function (result) {
        var post = result[0];
        if(!post) {
            throw new Error('该文章不存在')
        }
        res.render('post', {
            post: post
        })
    }).catch(next);
});

// GET /post/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, function (req, res, next) {
    res.send(req.flash())
});

// POST /posts/:postId/edit 更新一篇文章
router.get('/:postId/edit', checkLogin, function (req, res, next) {
    res.send(req.flash())
});

// GET /posts/:postID/remove  删除一篇文章
router.get('/:postId/remove', checkLogin, function (req, res, next) {
    res.send(req.flash())
});

// POST /posts/:postId/comment 创建一条留言
router.post('/:postId/comment', checkLogin, function (req, res, next) {
    res.send(req.flash())
});

// GET /posts/:postId/comment/:commentId/remove  删除一条留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function (req, res, next) {
    res.send(req.flash())
});

module.exports = router;

//
