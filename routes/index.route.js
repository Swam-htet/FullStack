const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: "Retail Store API Server with Node.js/Express.js/MongoDB"});
});


module.exports = router;
