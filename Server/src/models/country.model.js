module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define('Country',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false,
                field: 'country'
            }
        }, {
        tableName: 'Country',
        timestamps: false
    });

    return Country
}