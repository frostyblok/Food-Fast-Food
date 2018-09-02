import express from 'express';

const orderRouter = express.Router();

orderRouter.route('/').get((req, res) => {
  res.status(200).json('Admin list of orders');
});

export default orderRouter;
