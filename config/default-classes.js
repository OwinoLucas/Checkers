'use strict';

const parent = require('evado/config/default-classes');

module.exports = {

    ...parent,
    'model/auth/ChangePasswordForm': require('../model/auth/ChangePasswordForm'),
    'model/auth/RequestResetForm': require('../model/auth/RequestResetForm'),
    'model/auth/requestVerificationForm': require('../model/auth/RequestVerificationForm'),
    'model/auth/ResetPasswordForm': require('../model/auth/ResetPasswordForm'),
    'model/auth/SignUpForm': require('../model/auth/SignUpForm'),
    'model/auth/SignInForm': require('../model/auth/SignInForm'),
    'model/User': require('../model/User'),

    'validator/UserPhoneValidator': require('../component/validator/UserPhoneValidator'),
    'security/PasswordAuthService': require('../component/security/PasswordAuthService'),
};