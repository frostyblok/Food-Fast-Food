import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
const { expect } = chai;

// let authTokenLogin;
// let authTokenSignup;


/* global it, describe */

// Test for POST requests
describe('Admin', () => {
  it('it should login an admin', (done) => {
    // HTTP POST -> LOGIN ADMIN
    const adminDetails = {
      userName: 'Frostyblok',
      password: 'sarriball',
    };
    chai.request(app)
      .post('/api/v1/auth/admin')
      .send(adminDetails)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('logged in successfully...');
        expect(res.body).to.have.property('token');
        expect(res.status).to.equal(200);
        done();
      });
  });
});
