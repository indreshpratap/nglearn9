module.exports.OK= function (res, data) {
    res.json({ status: true, data: data });
}
module.exports.NOT_OK= function (res, data) {
    res.json({ status: false, data: data });
}
module.exports.ERROR = function(res, error) {
    res.status(500).json({ status: false, error: error });
}


