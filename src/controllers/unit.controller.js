const httpStatus = require('http-status');
const { unitService } = require('../services');

const getUnits = async (req, res) => {
  const units = await unitService.getAllUnits();
  res.status(httpStatus.OK).send(units);
};

module.exports = {
  getUnits,
};
