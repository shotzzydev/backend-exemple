const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    infos: {
        create: String,
        name: String,
        avatar: String,
        Plan: String,
        Duration: String
    }
});

const UserModel = mongoose.model('User', UserShema);
module.exports = UserModel;