const { Router } = require('express');
const Rock = require('../models/Rock');
module.exports = Router().get('/', async (req, res) => {
  const rocks = await Rock.findAll();
  res.send(rocks);
});
