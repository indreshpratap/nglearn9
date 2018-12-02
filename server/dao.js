var path = require('path');
var Datastore = require('nedb');

let db = {
    users: new Datastore({ filename: path.resolve(__dirname, 'db/users'), autoload: true }),
    group: new Datastore({ filename: path.resolve(__dirname, 'db/group'), autoload: true }),
    questions: new Datastore({ filename: path.resolve(__dirname, 'db/questions'), autoload: true })

};

module.exports = db;