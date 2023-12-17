const { Pool } = require('pg');
const logger = require('./logger');
const config = require('./config');

const pool = new Pool({
  user: config.postgres.user,
  host: config.postgres.host,
  database: config.postgres.database,
  password: config.postgres.password,
  port: config.postgres.port,
});

pool.on('error', (err) => {
  logger.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const db = {
  async connect() {
    return pool.connect();
  },

  async query(text, params) {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    logger.info('executed query', { text, duration, rows: res.rowCount });
    return res;
  },
};

module.exports = db;
