// var session = require('express-session');
// var FileStore = require('session-file-store')(session);
var cors = require('cors');
var bodyParser = require('body-parser');
// var { passportConfiguration } = require('./passport-config');


module.exports = function initilizeMiddleWares(expressApp) {
    // adding middleware
    // expressApp.use(cors({origin:["http://localhost:4200"],  credentials: true})); // cross origin

    expressApp.use(bodyParser.json());

    // expressApp.use(session({
    //     secret: 'learning',
    //     resave: false,
    //     saveUninitialized: true,
    //     cookie: { secure: false },
    //     store: new FileStore()
    // }));

    // passportConfiguration(expressApp);


}