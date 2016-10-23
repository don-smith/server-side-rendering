var test = require('tape')
var cheerio = require('cheerio')
var request = require('supertest')

var server = require('../server')

test('header is populated', function (t) {
  var expected = 'Welcome to Awesome'
  request(server)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'no error')
      var $ = cheerio.load(res.text)
      t.equals($('h1').text(), expected, 'header is visible')
      t.end()
    })
})

test('list is populated', function (t) {
  var expected = 3
  request(server)
    .get('/')
    .expect(200)
    .query({showlist: true})
    .end(function (err, res) {
      t.error(err, 'no error')
      var $ = cheerio.load(res.text)
      t.equals($('li').length, expected, '3 items found')
      t.end()
    })
})
