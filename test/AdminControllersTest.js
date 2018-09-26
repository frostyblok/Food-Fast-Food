import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
const { expect } = chai;


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

  it('it should login an admin', (done) => {
    // HTTP POST -> LOGIN ADMIN
    const adminDetails = {
      userName: 'Andela',
      password: 'dellamin',
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

  it('it should not login an unknown admin', (done) => {
    // HTTP POST -> LOGIN ADMIN
    const adminDetails = {
      userName: 'EvenAdelaSef',
      password: '488rruhrhufr',
    };
    chai.request(app)
      .post('/api/v1/auth/admin')
      .send(adminDetails)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Username or Password is incorrect');
        expect(res.status).to.equal(401);
        done();
      });
  });

  it('it should login an admin with incorrect password', (done) => {
    // HTTP POST -> LOGIN ADMIN
    const adminDetails = {
      userName: 'Frostyblok',
      password: 'letmetryitfes',
    };
    chai.request(app)
      .post('/api/v1/auth/admin')
      .send(adminDetails)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Username or Password is incorrect');
        expect(res.status).to.equal(401);
        done();
      });
  });
  it('It should get all admin', (done) => {
    chai.request(app)
      .get('/api/v1/auth/admin')
      .end((err, res) => {
        expect(res.body).to.have.property('status')
          .eql('Success');
        expect(res.status).to.equal(200);
        done();
      });
  });
});
