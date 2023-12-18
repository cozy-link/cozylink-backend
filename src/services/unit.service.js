const { Unit } = require('../models');

/**
 * Get all units
 * @returns {Promise<Unit>}
 * @api public
 *
 */
const getAllUnits = async () => {
  const units = await Unit.findAll();
  return units;
};

module.exports = {
  getAllUnits,
};
