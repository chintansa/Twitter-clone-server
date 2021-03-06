const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    avatarIcon: String,
    handle: String,
    profilePicture : String,
    bannerPicture :  String,
    bio: String,
    location: String,
    website: String,
    dateOfBirth: String,
    dateJoined : String,
    followingCount : {type: Number, defaultValue: 0},
    followersCount : {type: Number, defaultValue: 0}
}, {collection: "profile"});

module.exports = schema;
