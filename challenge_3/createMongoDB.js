var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertDocuments(db, function() {
    findDocuments(db, function() {
      db.close();
    })
  });
})
module.exports = MongoClient;
