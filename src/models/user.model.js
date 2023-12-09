const { Sequelize, Model, DataTypes } = require('sequelize');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/db');
const { roles } = require('../config/roles');

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      isEmail: true,
      isValidEmail(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
    validate: {
      len: [6, 20],
      isStrongPassword(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      }
    }
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
    validate: {
      isIn: [roles]
    }
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;
