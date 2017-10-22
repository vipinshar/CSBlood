let member = require('../../helpers/memberhelper');
let ref_resp_handler = require('../../utils/custom_response');
let appConstant = require('../../config/constant');

let resp_hendler = new ref_resp_handler();
module.exports = function (app, express) {
    let router = express.Router();
    let middleware = require('../../middlewares/originmiddleware')(router);

    router.post('/save', (req, res) => {
        member.SaveData(req.body).then(response => {
            resp_hendler.response(res, appConstant.RESPONSE_ENUM.SUCCESS, appConstant.RESPONSE_ENUM.IS_Success,
                appConstant.RESPONSE_ENUM.Success_Message, appConstant.Version, response);
        }).catch(error => {
            console.log(error);
            resp_hendler.response(res, appConstant.RESPONSE_ENUM.SUCCESS, appConstant.RESPONSE_ENUM.Fail_Success,
                "Failure", appConstant.Version, error);
        });
    });

    router.get('/donors', (req, res) => {
       
        member.GetAll().then(response => {
            resp_hendler.response(res, appConstant.RESPONSE_ENUM.SUCCESS, appConstant.RESPONSE_ENUM.IS_Success,
                appConstant.RESPONSE_ENUM.Success_Message, appConstant.Version, response);
        }).catch(error => {
            console.log(error);
            resp_hendler.response(res, appConstant.RESPONSE_ENUM.EXCEPTION, appConstant.RESPONSE_ENUM.Fail_Success,
                "Failure", appConstant.Version, error);
        });
    });
    return router;
}