
let mong = require('mongoose');
let schema = mong.Schema;

let MemberModel = new schema({
    _id: { type: schema.Types.ObjectId },
    title: String,
    Name: String,
    Gender: Number,
    Age: Number,
    BG: Number,
    ContactNumber: {
        type: String,
        validate: {
            isAsync: true,
            validator: (c, vb) => {
                _MemberModel.find({ ContactNumber: c }, (err, docs) => {
                    vb(docs.length == 0);
                });
            },
            message: 'Contact Number already exists!'
        }
    },
    Email: {
        type: String,
        validate: {
            isAsync: true,
            validator: (c, vb) => {
                _MemberModel.find({ Email: c }, (err, docs) => {
                    vb(docs.length == 0);
                });
            }, message: 'Email already exists!'
        }
    },
    PersentAddress: String,
    State: String,
    City: String,
    PermanentAddress: String,
    LastDobated: Date
});

let _MemberModel = mong.model("Members", MemberModel);
module.exports = _MemberModel;