import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

/* eslint linebreak-style: 0 */
chai.use(chaiHttp);
const { expect } = chai;


/* global it, describe */

// Test for POST requests
describe('Admin', () => {
  it('it should login an admin', (done) => {
    const adminDetails = {
      email: 'andela@food.com',
      password: 'andela2018',
    };
    chai.request(app)
      .post('/api/v1/auth/admin')
      .send(adminDetails)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Admin logged in successfully');
        expect(res.body).to.have.property('token');
        expect(res.status).to.equal(200);
        done();
      });
  });
});
