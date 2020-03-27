const request = require('supertest');
const app = require('../../../src/app');
const database = require('../../../src/database/connection');

describe('ONGS', () => {
  beforeEach(async () => {
    await database.migrate.rollback();
    await database.migrate.latest();
  });

  afterAll(async () => {
    await database.destroy();
  });

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      // .set('Authorization', 'ee22a895')
      .send({
        name: 'AACD 2',
        email: 'aacd@dogs.com',
        whatsapp: '1199999999',
        city: 'Franco da Rocha',
        uf: 'SP',
      });

    expect(response.body).toHaveProperty('id');
  });
});
