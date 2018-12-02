var Router = require('express').Router;
var db = require('../dao');
var { OK, ERROR } = require('../config/route.helper');
var admin = new Router();

admin.get('/users', (req, res) => {
    db.users.find({}, (err, users) => {
        if (err) return ERROR(res, err);
        OK(res, users);
    })
});

admin.post('/register-user', (req, res) => {
    let data = req.body;
    data.role = 'user';
    data.password = '12345';
    db.users.insert(data, (err, newdoc) => {
        if (err) return ERROR(res, err);
        OK(res, newdoc);
    });

});

admin.post('/register-group', (req, res) => {
    let data = req.body;
    data.active = true;
    data.created_date = new Date();

    db.group.insert(data, (err, newdoc) => {
        if (err) return ERROR(res, err);
        OK(res, newdoc);
    });
});

admin.get('/get-groups', (req, res) => {
    //console.log("User are you there?",req.user);
    db.group.find({}, (err, docs) => {
        if (err) return ERROR(res, err);
        OK(res, docs);
   // ERROR(res, courses);
    });
});

admin.post('/register-question', (req, res) => {
    let data = req.body;
    db.questions.insert(data, (err, newdoc) => {
        if (err) return ERROR(res, err);
        OK(res, newdoc);
    });
});

admin.get('/get-questions/:groupId', (req, res) => {
    let groupId = req.params.groupId;


    db.batch.find({groupId:groupId}, (err, batch) => {
        if (err) return ERROR(res, err);
        OK(res, batch);
    });
});






module.exports = admin;