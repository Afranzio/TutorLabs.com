module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define('Profile',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'id'
                }
            },
            first_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            last_name: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            country_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Country',
                    key: 'id'
                }
            },
            state_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'State',
                    key: 'id'
                }
            },
            mobile_number: {
                type: Sequelize.STRING(10),
                allowNull: false
            },
            skype_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            skill_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Skill',
                    key: 'id'
                }
            },
            experience: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            current_position: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            portfolio_link: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            hours_per_week: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            resume_url: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            bio: {
                type: Sequelize.STRING(1000),
                allowNull: false
            }

        }, {
        tableName: 'Profile',
        timestamps: false
    });
    Profile.associate = models => {
        Profile.hasMany(models.Skill, { foreignKey: 'userId', sourceKey: 'user_id', as: 'skill' });
    };

    return Profile
}