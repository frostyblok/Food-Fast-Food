import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
const { expect } = chai;

// let authTokenLogin;
// let authTokenSignup;


/* global it, describe */

// Test for POST requests
describe('User', () => {
  it('it should register a new user', (done) => {
    // HTTP POST -> REGISTER A NEW USER
    const newUser = {
      userName: 'BankyMoon',
      email: 'ab@c.com',
      password: 'sarriball',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('you have successfully Registered this user');
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('it should login a user', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      userName: 'BankyMoon',
      password: 'sarriball',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('logged in successfully...');
        expect(res.body).to.have.property('token');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should get all users', (done) => {
    // HTTP GET -> ALL USERS
    chai.request(app)
      .get('api/v1/auth/users')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
