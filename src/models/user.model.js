const validator = require('validator');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const { roles } = require('../config/roles');

const userModel = {
  async findById(id) {
    const query = `SELECT * FROM users WHERE id = $1`;
    const params = [id];
    const { rows } = await db.query(query, params);
    return rows[0];
  },

  async create(user) {
    if (!user.name) {
      throw new Error('Name is required');
    }
    if (!user.email) {
      throw new Error('Email is required');
    }
    if (!validator.isEmail(user.email)) {
      throw new Error('Email is invalid');
    }
    if (!user.password) {
      throw new Error('Password is required');
    }
    if (!user.role) {
      throw new Error('Role is required');
    }
    if (!Object.values(roles).includes(user.role)) {
      throw new Error('Role does not exist');
    }

    const cryptPassword = await bcrypt.hash(user.password, 8);
    const query = `INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *`;
    const params = [user.name, user.email, cryptPassword, user.role];
    const { rows } = await db.query(query, params);
    return rows[0];
  },
};

module.exports = userModel;
