module.exports = function (router) {
    router.use(function (req, res, next) {
        debugger;
        var whitelist = 'http://blooddonation.cybersipahi.org/'
        var host = req.get('host');
        console.log(req.host);
        if (req.host == whitelist) {

        }
        //router.send(401);
        next();
    });
}
