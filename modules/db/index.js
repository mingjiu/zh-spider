const mongoose = require('mongoose')
const schema = require('./schema')

mongoose.connect('mongodb://zhgj:zhgj@127.0.0.1:27017/zhgj')

mongoose.connection.on('open', () => {
  console.log(`${new Date().toTimeString()}: mongoDB has been connectted!`)
})

let models = {}

for (let key in schema) {
  models[key] = mongoose.model(key, schema[key])
}

module.exports = models