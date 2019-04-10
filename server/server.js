var Datastore = require('nedb');
var db = new Datastore();
var address = new Datastore({ filename: 'address.db', autoload: true});

db.loadDatabase(function (err) {
    
})

"mongodb+srv://TylerOlsen:Shank1989@cluster0-tihhu.mongodb.net/test?retryWrites=true"
