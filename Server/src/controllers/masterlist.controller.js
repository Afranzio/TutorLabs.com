const masterlistService = require('../services/masterlist.service');
// const authService = require('../shared/auth.service');

const findAllCountries = async (req, res) => {
    const countries = await masterlistService.findCountries();
    res.status(200).json(countries);
};

const findAllStates = async (req, res) => {
    const countryId = req.params.countryId;
    const states = await masterlistService.findStates(countryId);

    return res.status(200).json(states);
};

module.exports = {
    findAllCountries,
    findAllStates
};
