var express = require('express')
var app = express()
var adminData = require('./admin_data')
var commonData = require('./common_data')
app.get('/', function (req, res) {
  var data = {}
  if (req.query.username === 'admin') {
    data = adminData
  } else {
    data = commonData
  }
  res.send(data)
})
app.listen(8000)
console.log("server listen at 8000")
