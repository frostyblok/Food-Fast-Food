import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import UserModel from '../dummyServer/dummyModels/UserModels';
/* eslint linebreak-style: 0 */

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
      address: 'Ikotun, Lagos',
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

  it('it should register a new user', (done) => {
    // HTTP POST -> REGISTER A NEW USER
    const newUser = {
      userName: 'ClintDaDrunk',
      email: 'clint@yahoo.com',
      password: '274683947',
      address: 'Ikeja, Lagos',
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

  it('it should not register a new user with empty input field(s)', (done) => {
    // HTTP POST -> REGISTER A NEW USER
    const newUser = {
      userName: '',
      email: 'clint@yahoo.com',
      password: '274683947',
      address: 'Ikeja, Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Please fill in all fields');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not register a new user with empty input field(s)', (done) => {
    // HTTP POST -> REGISTER A NEW USER
    const newUser = {
      userName: '',
      email: '',
      password: '',
      address: '',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Please fill in all fields');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not register a new user with invalid email address', (done) => {
    // HTTP POST -> REGISTER A NEW USER
    const newUser = {
      userName: 'ShaworoIde',
      email: 'shawaroidemode.com',
      password: '843507497',
      address: 'Okota, Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Please enter a valid email');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not register a new user with weak password', (done) => {
    // HTTP POST -> REGISTER A NEW USER
    const newUser = {
      userName: 'Kaycee',
      email: 'kc@yahoo.com',
      password: 'gdh43',
      address: 'Alagbole, Ogun State',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Password must at least be 6 characters long');
        expect(res.status).to.equal(400);
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

  it('it should not login a user with incorrect password', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      userName: 'SarafeWatata',
      password: 'sarriball',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Username or Password is incorrect');
        expect(res.status).to.equal(401);
        done();
      });
  });

  it('it should not login an unknown user', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      userName: 'trespasser',
      password: 'whocallyou3455',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Username or Password is incorrect');
        expect(res.status).to.equal(401);
        done();
      });
  });

  it('it should get all users', (done) => {
    // HTTP GET -> ALL USERS
    chai.request(app)
      .get('/api/v1/auth/users')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(UserModel).to.have.length(4);
        done();
      });
  });
});
