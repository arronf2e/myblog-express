module.exports = {
    port: 3000,
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://zhanghao:zh2202@ds127958.mlab.com:27958/arronblog'
}