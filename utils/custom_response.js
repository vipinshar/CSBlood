
module.exports = function custom_response() {
    custom_response.prototype.response = function (resp, respCode, isSuccess, message, version, result) {
        resp.set('Access-Control-Allow-Origin', '*');
        resp.statusCode = isSuccess;
        resp.message = message;
        resp.status(respCode).send({
            "version": version,
            "success": isSuccess,
            "status": respCode,
            "message": message,
            "result": result
        });
    };
}
