module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define('City',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            city_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            state_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            state_country_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        }, {
        tableName: 'City',
        timestamps: false
    })

    return City
}