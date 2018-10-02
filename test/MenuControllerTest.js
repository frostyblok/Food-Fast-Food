import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

/* eslint linebreak-style: 0 */

chai.use(chaiHttp);
const { expect } = chai;


/* global it, describe, before */

let NewAuthToken;
// const fakeAuth = 'fdkfjekdjkd';
let adminAuth;
const id = 1;
const incorrectId = 700;
describe('Menu', () => {
  before((done) => {
    const userDetails = {
      email: 'andela@gmail.com',
      password: 'andela2018',
    };
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(userDetails)
      .end((err, res) => {
        adminAuth = res.body.token;
        done();
      });
  });
  before((done) => {
    const userDetails = {
      user_name: 'Johnson',
      email: 'thomafdlkfas@gmail.com',
      password: 'clintmafdnnnd',
      address: 'Ikotun Lagos',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userDetails)
      .end((err, res) => {
        NewAuthToken = res.body.token;
        done();
      });
  });

  it('it should add a new menu', (done) => {
    const newMenu = {
      menu_name: 'Wheat yam',
      menu_price: 1600,
      menu_image: 'yam.jpg',
    };
    chai.request(app)
      .post('/api/v1/menu')
      .set('x-access-token', adminAuth)
      .send(newMenu)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Menu successfully added');
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('it should not allow menu with empty input', (done) => {
    const newOrder = {
      menu_name: '',
      menu_price: '',
      menu_image: '',
    };
    chai.request(app)
      .post('/api/v1/menu')
      .set('x-access-token', adminAuth)
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Menu name, price and image can not be empty');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should get all menu', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .set('x-access-token', NewAuthToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should fetch a specific menu', (done) => {
    chai.request(app)
      .get(`/api/v1/menu/${id}`)
      .set('x-access-token', NewAuthToken)
      .end((err, res) => {
        expect(res.body).to.have.property('status')
          .eql('Success');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should not get a specific menu that does not exit', (done) => {
    chai.request(app)
      .get(`/api/v1/menu/${incorrectId}`)
      .set('x-access-token', NewAuthToken)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.have.property('message')
          .eql('Menu does not exit');
        done();
      });
  });

  it('it should update a menu', (done) => {
    const newMenu = {
      menu_name: 'Smoke Fish',
      menu_price: 2000,
      menu_image: 'smokefish.jpg',
    };
    chai.request(app)
      .put(`/api/v1/menu/${id}`)
      .set('x-access-token', adminAuth)
      .send(newMenu)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Menu updated successfully');
        expect(res.status).to.equal(200);
        done();
      });
  });


  it('it should not update an unknown menu', (done) => {
    const order = {
      menu_name: 'Smoke Fish',
      menu_price: 2000,
      menu_image: 'smokefish.jpg',
    };
    chai.request(app)
      .put(`/api/v1/menu/${incorrectId}`)
      .set('x-access-token', adminAuth)
      .send(order)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Menu does not exit');
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('it should delete a menu', (done) => {
    // HTTP POST -> LOGIN ADMIN
    chai.request(app)
      .delete(`/api/v1/menu/${id}`)
      .set('x-access-token', adminAuth)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Menu successfully deleted');
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('it should not delete an unknown menu', (done) => {
    chai.request(app)
      .delete(`/api/v1/menu/${incorrectId}`)
      .set('x-access-token', adminAuth)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('No menu with the id found');
        expect(res.status).to.equal(404);
        done();
      });
  });
});
