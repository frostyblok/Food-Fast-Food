import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

/* eslint linebreak-style: 0 */

chai.use(chaiHttp);
const { expect } = chai;

// let authTokenLogin;
// let authTokenSignup;


/* global it, describe */

// Test for POST requests
describe('User', () => {
  it('it should register a new user', (done) => {
    const newUser = {
      user_name: 'BankyMoon',
      email: 'ab@c.com',
      password: 'sarriball',
      address: 'Ikotun, Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('User registered successfully');
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('it should register a new user', (done) => {
    const newUser = {
      user_name: 'ClintDaDrunk',
      email: 'clint@yahoo.com',
      password: '274683947',
      address: 'Ikeja, Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('User registered successfully');
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('it should not register a new user with empty input field(s)', (done) => {
    const newUser = {
      user_name: '',
      email: 'clint@yahoo.com',
      password: '274683947',
      address: 'Ikeja, Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Username is required');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not register a new user with empty input field(s)', (done) => {
    const newUser = {
      user_name: 'Clepmsy',
      email: '',
      password: '274683947',
      address: 'Ikeja, Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Email is required');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not register a new user with empty input field(s)', (done) => {
    const newUser = {
      user_name: 'codejfdo',
      email: 'clint@yahoo.com',
      password: '',
      address: 'Ikeja, Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Password is required');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not register a new user with empty input field(s)', (done) => {
    const newUser = {
      user_name: 'dfjdflad',
      email: 'clint@yahoo.com',
      password: '274683947',
      address: '',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('User address is required');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not register a new user with empty input field(s)', (done) => {
    const newUser = {
      user_name: 'dafjkdlfsjklsdkldjlkdfkdfjd;fdkfkdfjkfdsfkdjfkdkfdjkfjdkfdkfjdkfjdklfjd',
      email: 'clint@yahoo.com',
      password: '274683947',
      address: 'Ikeja, Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Username too long');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not register a new user with already existing email address', (done) => {
    const newUser = {
      user_name: 'John Delve',
      email: 'oluwakunle@gmail.com',
      password: '274683947',
      address: 'Ikeja, Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('User already exist');
        expect(res.status).to.equal(409);
        done();
      });
  });

  it('it should not register a new user with empty input field(s)', (done) => {
    const newUser = {
      user_name: '',
      email: '',
      password: '',
      address: '',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('All fields are required');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not register a new user with invalid email address', (done) => {
    // HTTP POST -> REGISTER A NEW USER
    const newUser = {
      user_name: 'ShaworoIde',
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

  it('it should not register a new user with short password length', (done) => {
    // HTTP POST -> REGISTER A NEW USER
    const newUser = {
      user_name: 'Kaycee',
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
      email: 'ab@c.com',
      password: 'sarriball',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('User logged in successfully');
        expect(res.body).to.have.property('token');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should not login a user with incorrect password', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      email: 'clint@yahoo.com',
      password: 'sarriball',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Incorrect username or password');
        expect(res.status).to.equal(401);
        done();
      });
  });

  it('it should not login a user with with empty inputs', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      email: '',
      password: 'sarriball',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Email is required');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not login a user with with empty inputs', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      email: 'aff@dfd.com',
      password: '',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Password is required');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not login a user with with empty inputs', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      email: '',
      password: '',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Email and password fields are required');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not login a user with weak password', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      email: 'wefiodf@dfl.com',
      password: 'sar',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Password must at least be 6 characters long');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not login a user with with empty inputs', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      email: '',
      password: '',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Email and password fields are required');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not login an unknown user', (done) => {
    // HTTP POST -> LOGIN A USER
    const newUser = {
      email: 'trespasser',
      password: 'whocallyou3455',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Incorrect username or password');
        expect(res.status).to.equal(401);
        done();
      });
  });
});
