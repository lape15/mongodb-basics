var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Lape' ;
mongoClient.connect(url, function (err, db) {
if (err) throw err;
console.log('Database created by Lape') ;
db.close()
} );
