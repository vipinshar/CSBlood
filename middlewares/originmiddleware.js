module.exports = function (router, app) {
    app.use(function (req, res, next) {
        console.log("Host name: " + req.headers.host);
        if (req.headers.host != "blooddonation.cybersipahi.org") {
            res.send('Invalid');
        }
        next();
    });
}
