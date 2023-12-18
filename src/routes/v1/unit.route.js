const express = require('express');
const unitController = require('../../controllers/unit.controller');

const router = express.Router();

router.route('/').get(unitController.getUnits);

// router.get('/', (req, res) => {
//   res.send('Hello World!');
// });

module.exports = router;
