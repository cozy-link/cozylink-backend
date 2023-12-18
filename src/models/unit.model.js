const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Unit extends Model {}

Unit.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numOfBedrooms: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    numOfBathrooms: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    unitArea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0 },
    },
    isFurnished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    inRoomLaundry: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    baseFeePerMonth: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: { min: 0 },
    },
    utilityFeePerMonth: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: { min: 0 },
    },
    internetFeePerMonth: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: { min: 0 },
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  },
  {
    sequelize,
    modelName: 'Unit',
  }
);

module.exports = Unit;
