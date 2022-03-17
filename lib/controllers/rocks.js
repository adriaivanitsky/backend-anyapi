const { Router } = require('express');
const Rock = require('../models/Rock');
module.exports = Router()
.get('/:id', async (req, res) => {
  const rock = await Rock.findById(req.params.id);
  res.send(rock);
})

.post('/', async (req, res) => {
  const rock = await Rock.insert(req.body);
  res.send(rock);
})
.get('/', async (req, res) => {
  const rocks = await Rock.findAll();
  res.send(rocks);

});
