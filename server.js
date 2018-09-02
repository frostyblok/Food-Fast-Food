import express from 'express';
import bodyParser from 'body-parser';

import OrderRoutes from './dummyServer/routes/OrderRoutes';
import UserRouter from './dummyServer/routes/UsersRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/orders', OrderRoutes);
app.use('/api/v1/auth', UserRouter);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Fast-Food-Fast API');
});

app.listen(8000, () => console.log('Server running on localhost/8000'));
