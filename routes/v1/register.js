let member = require('../../helpers/memberhelper');
let ref_resp_handler = require('../../utils/custom_response');
let appConstant = require('../../config/constant');
let resp_hendler = new ref_resp_handler();
module.exports = function (app, express) {
    let router = express.Router();
    let middleware = require('../../middlewares/originmiddleware')(router, app);

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

    router.get('/donors/:id', (req, res) => {
        member.GetByUserId(req.params.id).then(response => {
            resp_hendler.response(res, appConstant.RESPONSE_ENUM.SUCCESS, appConstant.RESPONSE_ENUM.IS_Success,
                appConstant.RESPONSE_ENUM.Success_Message, appConstant.Version, response);
        }).catch(error => {
            console.log(error);
            resp_hendler.response(res, appConstant.RESPONSE_ENUM.EXCEPTION, appConstant.RESPONSE_ENUM.Fail_Success,
                "Failure", appConstant.Version, error);
        });
    });

    router.put('/donors', (req, res) => {
        member.UpdateUser(req.body).then(response => {
            resp_hendler.response(res, appConstant.RESPONSE_ENUM.SUCCESS, appConstant.RESPONSE_ENUM.IS_Success,
                appConstant.RESPONSE_ENUM.Success_Message, appConstant.Version, response);
        }).catch(error => {
            console.log(error);
            resp_hendler.response(res, appConstant.RESPONSE_ENUM.EXCEPTION, appConstant.RESPONSE_ENUM.Fail_Success,
                "Failure", appConstant.Version, error);
        });
    });

    router.get('/uploadExcel', (req, res) => {
        var XLSX = require('xlsx')
        debugger;
        var workbook = XLSX.readFile('C:\\Users\\asus\\Desktop\\Cybersipahi Blood Group Details.xlsx');
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        for (var i = 0; i < xlData.length; i++) {
            var data = {
                title: xlData[i]["Title (Mr/Ms/Mrs)"],
                Name: xlData[i]["Name"],
                Gender: xlData[i]["Sex"],
                Age: xlData[i]["Age"],
                BloodGroup: xlData[i]["Blood Group"],
                ContactNumber: xlData[i]["Contact  Number"],
                Email: xlData[i]["Email"],
                PersentAddress: xlData[i]["Present Address/Location"],
                State: xlData[i]["State/ UT"],
                City: xlData[i]["City"],
                PermanentAddress: xlData[i]["Permanent Address"],
                LastDobated: ''
            }
            member.SaveData(data).then(response => {
               
            }).catch(error => {
               
            });
        }

    });

    return router;
}