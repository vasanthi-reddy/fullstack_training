var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://vasanthireddy2001:cMxwx3dXeq2eLnFM@cluster0.dbr7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      console.log("Connected successfully");
      db.close();
    });