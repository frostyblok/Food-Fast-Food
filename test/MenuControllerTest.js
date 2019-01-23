import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

/* eslint linebreak-style: 0 */

chai.use(chaiHttp);
const { expect } = chai;


/* global it, describe, before */

let NewAuthToken;
const fakeAuth = 'fdkfjekdjkd';
let adminAuth;
const id = 6;
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

  it('it should not add a new menu for unknown admin', (done) => {
    const newMenu = {
      menu_name: 'Wheat yam',
      menu_price: 1600,
      menu_image: 'yam.jpg',
    };
    chai.request(app)
      .post('/api/v1/menu')
      .set('x-access-token', NewAuthToken)
      .send(newMenu)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('You are not allowed to access the route');
        expect(res.status).to.equal(403);
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

  it('it should add a new menu', (done) => {
    const newMenu = {
      menu_name: 'Jollof Rice',
      menu_price: 2600,
      menu_image: 'rice.jpg',
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

  it('it should add a new menu', (done) => {
    const newMenu = {
      menu_name: 'plantain Chips',
      menu_price: 600,
      menu_image: 'chips.jpg',
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

  it('it should add a new menu', (done) => {
    const newMenu = {
      menu_name: 'Fried Rice',
      menu_price: 4000,
      menu_image: 'friedr.jpg',
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

  it('it should add a new menu', (done) => {
    const newMenu = {
      menu_name: 'Beans Bread',
      menu_price: 1000,
      menu_image: 'beansbread.jpg',
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
          .eql('Menu name, menu price, and menu image can not be empty');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not allow menu with empty input', (done) => {
    const newOrder = {
      menu_name: '',
      menu_price: '34455',
      menu_image: 'dfwe.jpg',
    };
    chai.request(app)
      .post('/api/v1/menu')
      .set('x-access-token', adminAuth)
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Menu name can not be empty');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not allow menu with empty input', (done) => {
    const newOrder = {
      menu_name: 'Food',
      menu_price: '',
      menu_image: 'food.png',
    };
    chai.request(app)
      .post('/api/v1/menu')
      .set('x-access-token', adminAuth)
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Menu price can not be empty');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not allow menu with empty input', (done) => {
    const newOrder = {
      menu_name: 'Food',
      menu_price: '3355',
      menu_image: '',
    };
    chai.request(app)
      .post('/api/v1/menu')
      .set('x-access-token', adminAuth)
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Menu image can not be empty');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not allow menu long menu name', (done) => {
    const newOrder = {
      menu_name: 'Foodfkfjdkfljdf;dlfjdlfd',
      menu_price: '3355',
      menu_image: 'fdfdk',
    };
    chai.request(app)
      .post('/api/v1/menu')
      .set('x-access-token', adminAuth)
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Menu name too long');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not allow menu with extreme price', (done) => {
    const newOrder = {
      menu_name: 'Food',
      menu_price: '33555584944555',
      menu_image: 'dfdf.jpg',
    };
    chai.request(app)
      .post('/api/v1/menu')
      .set('x-access-token', adminAuth)
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('The price has exceeded the order\'s valuation');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not allow menu with invalid menu price', (done) => {
    const newOrder = {
      menu_name: 'Moi Moi',
      menu_price: '2dfdf0',
      menu_image: 'yeoe.jpg',
    };
    chai.request(app)
      .post('/api/v1/menu')
      .set('x-access-token', adminAuth)
      .send(newOrder)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Invalid price, please enter a valid price');
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

  it('it should not get menu for user with fake authentication', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .set('x-access-token', fakeAuth)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Authentication failed');
        expect(res.status).to.equal(401);
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

  it('it should not fetch a specific menu with invalid params', (done) => {
    chai.request(app)
      .get('/api/v1/menu/7e.8')
      .set('x-access-token', NewAuthToken)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('ID can only be a number');
        expect(res.body).to.have.property('status')
          .eql('Error');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not fetch a specific menu with unknow id', (done) => {
    chai.request(app)
      .get('/api/v1/menu/dfdlf')
      .set('x-access-token', NewAuthToken)
      .end((err, res) => {
        expect(res.body).to.have.property('status')
          .eql('Error');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not get menu for user with fake authentication', (done) => {
    chai.request(app)
      .get(`/api/v1/menu/${id}`)
      .set('x-access-token', fakeAuth)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('Authentication failed');
        expect(res.status).to.equal(401);
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

  it('it should not update a menu with invalid id', (done) => {
    const newMenu = {
      menu_name: 'Smoke Fish',
      menu_price: 2000,
      menu_image: 'smokefish.jpg',
    };
    chai.request(app)
      .put('/api/v1/menu/7.yt')
      .set('x-access-token', adminAuth)
      .send(newMenu)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('ID can only be a number');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not update menu for an unknown admin', (done) => {
    const newMenu = {
      menu_name: 'Smoke Fish',
      menu_price: 2000,
      menu_image: 'smokefish.jpg',
    };
    chai.request(app)
      .put(`/api/v1/menu/${id}`)
      .set('x-access-token', NewAuthToken)
      .send(newMenu)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('You are not allowed to access the route');
        expect(res.status).to.equal(403);
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

  it('it should not delete a menu with invalid params', (done) => {
    // HTTP POST -> LOGIN ADMIN
    chai.request(app)
      .delete('/api/v1/menu/0.677')
      .set('x-access-token', adminAuth)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('ID can only be a number');
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('it should not delete a menu for an unknown admin', (done) => {
    // HTTP POST -> LOGIN ADMIN
    chai.request(app)
      .delete(`/api/v1/menu/${id}`)
      .set('x-access-token', NewAuthToken)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
          .eql('You are not allowed to access the route');
        expect(res.status).to.equal(403);
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
