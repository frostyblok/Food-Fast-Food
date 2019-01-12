import React, { Component } from 'react';

class ConfirmOrderPage extends Component {
  render() { 
    return ( 
    <section>
      <div className="container">
        <div id="complete-modal">
          <div id="complete-modal-content">
            <span id="complete-closeBtn">&times;</span>
            <div id="complete-display-para">
            </div>
          </div>
        </div>
        <div id="confirm-order-card" className="confirm-order-card">
          <div id="main-modal">
            <div id="main-modal-content">
              <span id="closeBtn">&times;</span>
              <div id="display-para">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     );
  }
}
 
export default ConfirmOrderPage;