import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

/* eslint linebreak-style: 0 */

chai.use(chaiHttp);
const { expect } = chai;


/* global it, describe */

// Test for POST requests
describe('Orders', () => {
  it('it should place an order', (done) => {
    // HTTP POST -> PLACE AN ORDER
    const newOrder = {
      orderName: 'Jollof Rice',
      amount: 600,
    };
    chai.request(app)
      .post('/api/v1/orders')
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('you have successfully placed this Order');
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('it should not place an order with empty input fields', (done) => {
    // HTTP POST -> PLACE AN ORDER
    const newOrder = {
      orderName: '',
      amount: '',
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
      .get('/api/v1/orders/1')
      .end((err, res) => {
        expect(res.body).to.have.property('status')
          .eql('success');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should not fetch a specific order that does not exit', (done) => {
    // HTTP GET -> GET A SPECIFIC ORDER;
    chai.request(app)
      .get('/api/v1/orders/7')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should update the status of an order', (done) => {
    // HTTP POST -> LOGIN ADMIN
    const order = {
      status: 'completed',
    };
    chai.request(app)
      .put('/api/v1/orders/1')
      .send(order)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('You have successfully updated the Order');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should test if order status is correctly updated', (done) => {
    // HTTP POST -> LOGIN ADMIN
    const order = {
      status: 'complet',
    };
    chai.request(app)
      .put('/api/v1/orders/1')
      .send(order)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('You have not updated the Order');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should test if order status is correctly updated', (done) => {
    // HTTP POST -> LOGIN ADMIN
    const order = {
      status: 'hwfhdfdfas',
    };
    chai.request(app)
      .put('/api/v1/orders/1')
      .send(order)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('You have not updated the Order');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('it should test if order status is correctly updated', (done) => {
    // HTTP POST -> LOGIN ADMIN
    const order = {
      status: '',
    };
    chai.request(app)
      .put('/api/v1/orders/1')
      .send(order)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('You have not updated the Order');
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
      .put('/api/v1/orders/5')
      .send(order)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('You are currently making a bad request');
        expect(res.status).to.equal(400);
        done();
      });
  });
  it('it should cancel an order', (done) => {
    // HTTP POST -> LOGIN ADMIN
    chai.request(app)
      .delete('/api/v1/orders/1')
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Order deleted succesfully');
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('it should not cancel an unknown order', (done) => {
    chai.request(app)
      .delete('/api/v1/orders/6')
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('You are making a bad request');
        expect(res.status).to.equal(400);
        done();
      });
  });
});
