module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    'UserRole',
    {
      role: DataTypes.STRING
    },
    { timestamps: false, tableName: 'UserRole' }
  );
  UserRole.associate = models => {
    UserRole.belongsTo(models.User, {
      foreignKey: 'id'
    });
  };
  UserRole.removeAttribute('id');

  return UserRole;
};
