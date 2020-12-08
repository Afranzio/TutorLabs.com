module.exports = {
  userName: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: 3306,
  dialect: 'mysql',
  define: {
    underscored: true
  },
  pool: {
    max: 10,
    idle: process.env.DB_POOL_IDLE,
    acquire: process.env.DB_POOL_ACQUIRE
  }
};