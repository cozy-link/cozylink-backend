const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.postgres.uri, { logging: false });

module.exports = sequelize;
