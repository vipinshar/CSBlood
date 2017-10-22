module.exports = function (router) {
    router.use(function (req, res, next) {
        debugger;
        var whitelist = 'blooddonation.cybersipahi.org/'

        console.log(req.hostname);
        if (req.hostname == whitelist) {
            next();
        } else {
            res.send(401);
        }
    });
}
