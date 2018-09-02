import express from 'express';
import bodyParser from 'body-parser';

import OrderRoutes from './dummyServer/routes/OrderRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/orders', OrderRoutes);

const logger = (req, res) => {
  res.status(200).json('Welcome to Fast-Food-Fast API');
}

app.get('/', logger);

app.listen(8000, () => console.log('Server running on localhost/8000'));
