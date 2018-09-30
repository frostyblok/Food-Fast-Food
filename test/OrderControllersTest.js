import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

/* eslint linebreak-style: 0 */

chai.use(chaiHttp);
const { expect } = chai;


/* global it, describe */

// Test for POST requests

const id = 1;
const incorrectId = 800;
describe('Orders', () => {
  it('it should place an order', (done) => {
    const newOrder = {
      food_name: 'Jollof Rice',
      food_price: 600,
    };
    chai.request(app)
      .post('/api/v1/orders')
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Order successfully placed');
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('it should not place an order with empty input fields', (done) => {
    // HTTP POST -> PLACE AN ORDER
    const newOrder = {
      food_name: '',
      food_price: '',
    };
    chai.request(app)
      .post('/api/v1/orders')
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('orderName or amount can not be empty');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should fetch all orders', (done) => {
    // HTTP GET -> FETCH ALL ORDERS;
    chai.request(app)
      .get('/api/v1/orders')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should fetch a specific order', (done) => {
    chai.request(app)
      .get(`/api/v1/orders/${id}`)
      .end((err, res) => {
        expect(res.body).to.have.property('status')
          .eql('Success');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should not fetch a specific order that does not exit', (done) => {
    // HTTP GET -> GET A SPECIFIC ORDER;
    chai.request(app)
      .get(`/api/v1/orders/${incorrectId}`)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.have.property('message')
          .eql('No order found');
        done();
      });
  });

  it('it should update the status of an order', (done) => {
    // HTTP POST -> LOGIN ADMIN
    const order = {
      status: 'completed',
    };
    chai.request(app)
      .put(`/api/v1/orders/${id}`)
      .send(order)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Order updated successfully');
        expect(res.status).to.equal(200);
        done();
      });
  });


  it('it should not update an unknown order', (done) => {
    // HTTP PUT -> UPDATE ORDER;
    const order = {
      status: 'completed',
    };
    chai.request(app)
      .put(`/api/v1/orders/${incorrectId}`)
      .send(order)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('No order with that id found');
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('it should delete an order', (done) => {
    // HTTP POST -> LOGIN ADMIN
    chai.request(app)
      .delete(`/api/v1/orders/${id}`)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Order successfully deleted');
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('it should not delete an unknown order', (done) => {
    chai.request(app)
      .delete(`/api/v1/orders/${incorrectId}`)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('No order with the id found');
        expect(res.status).to.equal(404);
        done();
      });
  });
});
