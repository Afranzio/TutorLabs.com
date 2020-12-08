module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING,
      field: 'username'
    },
    emailId: {
      type: DataTypes.STRING,
      field: 'email_id'
    },
    userPassword: {
      type: DataTypes.STRING,
      field: 'password'
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Role',
        key: 'id'
      }
    }
  }, {
    tableName: 'User',
    timestamps: false
  });
  User.associate = models => {
    User.hasOne(models.UserRole, { sourceKey: 'roleId', foreignKey: 'id', as: 'roles' });
    // User.hasMany(models.Skill, { sourceKey: 'id', foreignKey: 'userId', as: 'skill' });
  };

  return User;
};
