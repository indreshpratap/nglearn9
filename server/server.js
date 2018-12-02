
var express = require('express');
var middlewares = require('./config/middlewares');
var path = require('path');
var adminRoutes = require('./routes/admin.routes');
var userRoutes = require('./routes/user.routes');
// var securityRoutes = require('./security.routes');
var fs = require('fs');
// var { isAdmin, isLoggedIn } = require('./session_check');

var app = express();

app.use("/", express.static(path.resolve(__dirname, "public/ngapp")));

middlewares(app);


app.get("/", (req, res) => {
    res.send(fs.readFileSync(path.resolve(__dirname, 'public/ngapp/index.html')));
});


// app.use("/api", securityRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);





app.listen(3031, () => {
    console.log("server running at port 3031");
});