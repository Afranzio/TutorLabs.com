const db = require('../models/index');

const { Country } = db.sequelize.models;
const { State } = db.sequelize.models;

const findCountries = userName => {
    return Country.findAll({
    });
};

const findStates = countryId => {
    return State.findAll({
        where: {
            country_id: countryId
        }
    });
};

module.exports = {
    findCountries,
    findStates
};
