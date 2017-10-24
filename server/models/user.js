let mongoose = require('mongoose');
let validator = require('validator');
let jwt = require('jsonwebtoken');
let _ = require('lodash');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        minlength: 1,
        trim: true,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]
});

userSchema.methods.toJSON = function() {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);
};

userSchema.methods.generateAuthToken = function() {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({ _id: user._id.toHexString() }, 'abc123').toString();

    user.tokens.push({ access, token });

    user.save().then(() => {
        return token;
    });

};
var User = mongoose.model('User', userSchema);

module.exports = { User };