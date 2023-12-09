const Sequelize = require('sequelize');
const config = require('./config')

let sequelize;
sequelize = new Sequelize(config.postgres.url, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
