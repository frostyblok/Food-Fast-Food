import React from 'react';

const HistoryList = ({order, onDelete}) => {
  const {created_at} = order;
  return (
    <li>
      <div className="order-disp">{order.id}</div>
      <div className="date-disp">{order.created_at}</div>
      <div onClick={() => onDelete(order.id)} className="order-name-disp myCursor">{order.food_name}</div>
      <div className="status-disp">{order.status}</div>
      <div className="amount-disp">{order.food_price}</div>
      <div className="quantity-disp">{order.quantity}</div>
    </li>
  );
}

export default HistoryList;
