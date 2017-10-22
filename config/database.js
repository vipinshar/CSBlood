let Promise = require("bluebird");

let mongoose = Promise.promisifyAll(require("mongoose"));
let constants = require("./constant");

global.db = global.db ? global.db : mongoose.connect(constants.M_Url, {
    useMongoClient: true
});

let connect= mongoose.connection;

connect.on('error',console.error.bind('connection error'));

connect.once('open', function () { console.log('Connected') });

connect.on('disconnected', function () { console.log('Disconnect') });