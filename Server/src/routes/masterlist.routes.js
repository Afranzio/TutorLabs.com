const express = require('express');
const masterlistRoutes = express.Router();

const masterlistCotroller = require('../controllers/masterlist.controller');

const authService = require('../shared/auth.service');
const errorHandler = require('../shared/error-handler');

masterlistRoutes.get('/country', errorHandler.wrapAsync(masterlistCotroller.findAllCountries));
masterlistRoutes.get('/state/:countryId', errorHandler.wrapAsync(masterlistCotroller.findAllStates));

module.exports = masterlistRoutes;
