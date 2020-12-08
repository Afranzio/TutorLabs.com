module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('Skill', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        skillName: {
            type: DataTypes.STRING,
            field: 'skill_name'
        },
        skillDescription: {
            type: DataTypes.STRING,
            field: 'skill_description'
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            references: {
                model: 'User',
                key: 'id'
            }
        },
        skills: {
            type: DataTypes.JSON,
            field: 'skills'
        }
    }, {
        tableName: 'Skill',
        timestamps: false
    });
    Skill.associate = models => {
        // Skill.belongsTo(models.Profile, { foreignKey: 'userId', as: 'skill' });
    };

    return Skill;
};
