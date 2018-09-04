import express from 'express';
import bodyParser from 'body-parser';

import OrderRouter from './dummyServer/routes/OrderRoutes';
import UserRouter from './dummyServer/routes/UsersRoutes';
import AdminRouter from './dummyServer/routes/AdminRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/orders', OrderRouter);
app.use('/api/v1/auth', UserRouter);
app.use('/api/v1/auth', AdminRouter);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Fast-Food-Fast API');
});

app.listen(8000, () => console.log('Server running on localhost/8000'));

export default app;
