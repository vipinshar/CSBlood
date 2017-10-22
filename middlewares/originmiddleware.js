module.exports = function (router) {
    router.use(function (req, res, next) {
        debugger;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
        var whitelist = 'blooddonation.cybersipahi.org';
        console.log(req.hostname+"Viin");
        if (req.hostname == whitelist) {
            next();
        } else {
            res.send(401);
        }
    });
}
