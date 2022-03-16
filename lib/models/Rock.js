const pool = require('../utils/pool');

module.exports = class Rock {
  id;
  name;
  crystal_system;
  hardness;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.crystal_system = row.crystal_system;
    this.hardness = row.hardness;
  }
  static async findAll() {
    const { rows } = await pool.query('SELECT * FROM rocks');
    return rows.map((row) => new Rock(row));
  }
};
