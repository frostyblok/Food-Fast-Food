import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
// import swaggerui from 'swagger-ui-express';

import OrderRouter from './server/routes/OrderRoutes';
import UserRouter from './server/routes/UsersRoutes';
import MenuRouter from './server/routes/MenuRoutes';
import UserOrdersRouter from './server/routes/UserOrderRoutes';

/* eslint linebreak-style: 0 */

const app = express();
dotenv.config();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './public')));

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, './public/signup'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './public/login.html'));
});
app.get('/order', (req, res) => {
  res.sendFile(path.join(__dirname, './public/order.html'));
});
app.get('/orderHistory', (req, res) => {
  res.sendFile(path.join(__dirname, './public/orderHistory.html'));
});
app.get('/orderList', (req, res) => {
  res.sendFile(path.join(__dirname, './public/orderList.html'));
});
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/confirmOrder', (req, res) => {
  res.sendFile(path.join(__dirname, './public/confirmOrder.html'));
});
app.get('/foodMenu', (req, res) => {
  res.sendFile(path.join(__dirname, './public/foodMenu.html'));
});
app.get('/erroPage', (req, res) => {
  res.sendFile(path.join(__dirname, './public/erroPage.html'));
});
app.get('/editFood', (req, res) => {
  res.sendFile(path.join(__dirname, './public/editFood.html'));
});
app.get('/completedOrders', (req, res) => {
  res.sendFile(path.join(__dirname, './public/completedOrders.html'));
});


app.use('/api/v1/orders', OrderRouter);
app.use('/api/v1/menu', MenuRouter);
app.use('/api/v1/auth', UserRouter);
app.use('/api/v1/users', UserOrdersRouter);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Success',
    message: 'Welcome to Fast-Food-Fast API',
  });
});

app.use('*', (req, res, next) => {
  res.status(404).json({
    status: 'Error',
    message: 'Page not found',
  });
  next();
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
