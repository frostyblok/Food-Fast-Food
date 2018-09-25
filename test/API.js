import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

/* eslint linebreak-style: 0 */

chai.use(chaiHttp);
const { expect } = chai;

/* global it, describe */

// Test for Fast-Food-Fast API
describe('API', () => {
  it('It should test if API is working correctly', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Welcome to Fast-Food-Fast API');
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('It should test for 404 error page', (done) => {
    chai.request(app)
      .get('/894refewpfew')
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Page not found');
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('It should test for 404 error page', (done) => {
    chai.request(app)
      .get('/api/yes')
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Page not found');
        expect(res.status).to.equal(404);
        done();
      });
  });
});
