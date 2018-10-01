import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import OrderRouter from './server/routes/OrderRoutes';
import UserRouter from './server/routes/UsersRoutes';
import MenuRouter from './server/routes/MenuRoutes';

/* eslint linebreak-style: 0 */

const app = express();
dotenv.config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/orders', OrderRouter);
app.use('/api/v1/menu', MenuRouter);
app.use('/api/v1/auth', UserRouter);

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
app.listen(port, () => console.log('Server running on localhost/8000'));

export default app;
