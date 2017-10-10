var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
    },
    email: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    password: {
        type: String
    }
});

module.exports = { User };