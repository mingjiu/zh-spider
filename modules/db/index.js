const mongoose = require('mongoose')

mongoose.connect('mongodb://zhgj:zhgj@127.0.0.1:27017/zhgj')

module.exports = mongoose