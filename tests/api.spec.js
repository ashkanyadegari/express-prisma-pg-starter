// const request = require('supertest');
// const app = require('../app.js');

// describe('Test Server Run', () => {
//   test('Check if server is live', (done) => {
//     request(app)
//       .get('/')
//       .set('origin', 'https://relay.club')
//       .set('Authorization', 'Bearer Q245EfgfCAz4SKLnnujp7cVABUXN')
//       .expect(200)
//       .end((err) => {
//         if (err) return done(err);
//         return done();
//       });
//   });
// });

// describe('Testing Post Entries', () => {
//   it('should create a new entry for testing@codesmiths.co', async () => {
//     const res = await request(app)
//       .post('/api/v1/register')
//       .set('origin', 'https://relay.club')
//       .set('Authorization', 'Bearer Q245EfgfCAz4SKLnnujp7cVABUXN')
//       .send({
//         email: 'testing@codesmiths.co',
//       });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('success');
//   });

//   it('should not create the same entry twice for testing@codesmiths.co', async () => {
//     const res = await request(app)
//       .post('/api/v1/register')
//       .set('origin', 'https://relay.club')
//       .set('Authorization', 'Bearer Q245EfgfCAz4SKLnnujp7cVABUXN')
//       .send({
//         email: 'testing@codesmiths.co',
//       });
//     expect(res.statusCode).toEqual(203);
//     expect(res.body).toHaveProperty('error');
//   });

//   it('should not create the same entry twice (capitalized) for TESTing@codesmiths.co', async () => {
//     const res = await request(app)
//       .post('/api/v1/register')
//       .set('origin', 'https://relay.club')
//       .set('Authorization', 'Bearer Q245EfgfCAz4SKLnnujp7cVABUXN')
//       .send({
//         email: 'TESTing@codesmiths.co',
//       });
//     expect(res.statusCode).toEqual(203);
//     expect(res.body).toHaveProperty('error');
//   });

//   it('it should not create an entry with invalid email for testicodesmiths.co', async () => {
//     const res = await request(app)
//       .post('/api/v1/register')
//       .set('origin', 'https://relay.club')
//       .set('Authorization', 'Bearer Q245EfgfCAz4SKLnnujp7cVABUXN')
//       .send({
//         email: 'testicodesmiths.co',
//       });
//     expect(res.statusCode).toEqual(403);
//     expect(res.body).toHaveProperty('error');
//   });
// });
