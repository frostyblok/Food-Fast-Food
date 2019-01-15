import React from 'react';

const FlexContainer = () => {
  return (
    <div className="flex-container">
      <div className="order-cont"><h4 className="flex-container-text-style">Order No</h4></div>
      <div className="date-cont"><h4 className="flex-container-text-style">Date<br />
      (dd-mm-yyyy)</h4></div>
      <div className="food-hist-cont"><h4 className="flex-container-text-style">Order Name</h4></div>
      <div className="status-cont"><h4 className="flex-container-text-style">Status</h4></div>
      <div className="amount-cont"><h4 className="flex-container-text-style">Amount</h4></div>
    </div>
  );
}

export default FlexContainer;
