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
    const expected = {};
    const response = await request(app).get('/api/v1/rocks');

    expect(response.body).toEqual(expected);
  });
});
