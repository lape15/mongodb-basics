var mongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
mongoClient.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  },function(err,db){
      if(err) throw err;
var dbo = db.db("Lape");
dbo.createCollection("interns",function(err,result){
        if(err) throw err;
        console.log("Interns collection created");
        db.close();
    })
})
