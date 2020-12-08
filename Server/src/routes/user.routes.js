const express = require('express');

const userRoutes = express.Router();

const userCotroller = require('../controllers/user.controller');

const authService = require('../shared/auth.service');
const errorHandler = require('../shared/error-handler');

userRoutes.post('/register', errorHandler.wrapAsync(userCotroller.createUser));
userRoutes.post('/create-profile', errorHandler.wrapAsync(userCotroller.createProfile));

userRoutes.get('/freelancers', errorHandler.wrapAsync(userCotroller.findFreelancers));
userRoutes.get('/freelancer', errorHandler.wrapAsync(userCotroller.findFreelancersByQuery));

// userRoutes.post('/verification/verifyemail', errorHandler.wrapAsync(userCotroller.verifyUserAccount));
userRoutes.post('/login', errorHandler.wrapAsync(userCotroller.authenticateUser));

// userRoutes.post('/forgetPassword', errorHandler.wrapAsync(userCotroller.forgetPassword));
userRoutes.post('/forget-password', errorHandler.wrapAsync(userCotroller.forgetUserPassword));

// userRoutes.post('/changePassword', authService.validateAuthToken, errorHandler.wrapAsync(userCotroller.changePassword));

module.exports = userRoutes;
