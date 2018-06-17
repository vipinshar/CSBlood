
let member = require('../models/member');
let ObjectId = require('mongodb').ObjectID;
let _mongoose = require('mongoose');
let Promise = require("bluebird");
_mongoose.Promise = require('bluebird');
let appConstant = require('../config/constant');

let register = {
    SaveData: function (model) {
        return new Promise((resolve, reject) => {
            let member_model = new member({
                _id: new ObjectId(),
                title: model.title,
                Name: model.Name,
                Gender: model.Gender,
                Age: model.Age,
                BG: model.BloodGroup,
                ContactNumber: model.ContactNumber,
                Email: model.Email,
                PersentAddress: model.PersentAddress,
                State: model.State,
                City: model.City,
                PermanentAddress: model.PermanentAddress,
                LastDobated: model.Date,
                CreatedDate: Date.now()
            });
            member_model.save((err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    },
    GetAll: function () {
        return new Promise((resolve, reject) => {
            member.find({}, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },
    GetByUserId: function (id) {
        return new Promise((resolve, reject) => {
            member.find({ _id: id }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },
    UpdateUser: function (user) {
        debugger;
        return new Promise((resolve, reject) => {
            member.findOneAndUpdate({ _id: user._id }, user, (err, data) => {
                debugger;
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
};

module.exports = register;