const { Router } = require('express');
const Rock = { name: 'flourite', crystal_system: 'isometric', hardness: 4 };
const pool = require('../utils/pool');

async function findAll() {}

module.exports = Router().get('/', async (req, res) => {
  const rocks = await Rock.findAll();
  res.send(rocks);
});
