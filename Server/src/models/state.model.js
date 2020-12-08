module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define('State',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            state: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            country_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Country',
                    key: 'id'
                }
            }
        }, {
        tableName: 'State',
        timestamps: false
    })

    return State
}