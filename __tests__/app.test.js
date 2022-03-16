const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-anyapi routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
  test('should read the table', async () => {
    // const expected = {
    //   name: 'flourite',
    //   crystal_system: 'isometric',
    //   hardness: 4,
    // };
    const expected = [
      { id: '1', name: 'pyrite', crystal_system: 'cubic', hardness: '6' },
      {
        id: '2',
        name: 'labradorite',
        crystal_system: 'triclinic',
        hardness: '6',
      },
      { id: '3', name: 'amethyst', crystal_system: 'trigonal', hardness: '7' },
    ];
    const response = await request(app).get('/api/v1/rocks');

    expect(response.body).toEqual(expected);
  });
});
