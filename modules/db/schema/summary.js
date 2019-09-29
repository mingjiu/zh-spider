const { Schema } = require('mongoose')

module.exports = Schema({
  origin_id: String,
  title: String,
  img: String,
  img_list: [String],
  datetime: String,
  summary: String,
  author: String,
  source: String,
  tags: [String],
  linkurl: String,
  create_time: Date
})