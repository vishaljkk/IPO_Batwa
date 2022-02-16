const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ 
    fullName: {
        type: String,
        trim: true,
        required: [true, 'Please add your full name']
    },
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add your title']
    },
    location: {
        type: String,
        trim: true,
        required: [true, 'Please add your location']
    },
    whatsappNo: {
        type: Number,
    },
    emailAddress: {
        type: String,
        trim: true,
        required: [true, 'Please Enter Email Address']
    },
    exp:{
        type: Number,
    },
    skills: {
        type: Array,
    },
    ctc:{
        type: Number,
    },
    introduction: {
        type: String,
    },
    githubUser: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);