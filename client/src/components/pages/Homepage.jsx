import React, { Component } from 'react';
import orderFood from '../../assets/orderFood.png';
import delivery from '../../assets/delivery.jpg';
import meal from '../../assets/meal.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="effective">
          <div className="container">
            <h1 className="effect-text-style"><span className="effect-color">EFFECTIVE, </span>ORGANISED,<br />& QUICK ONLINE<br /><span className="effect-color">KITCHEN</span></h1>
            <h3 className="effect-texxt-style">Get food delivered to your doorsteps.</h3>
          </div>
        </section>
        <section className="work-model">
          <div className="container">
            <div className="how-works">
              <h2 className="works-text">HOW IT WORKS</h2>
            </div>
            <div className="works-paradigm">
              <div className="order-food">
                <ul className="paradigm-style">
                  <li><img src={orderFood} /></li>
                  <li><h4>Order Your Food</h4></li>
                  <li><p>Browse through categories of available meal</p></li>
                </ul>
              </div>
              <div className="recieve-food">
                <ul className="paradigm-style">
                  <li><img src={delivery} /></li>
                  <li><h4>Recieve at your doorstep</h4></li>
                  <li><p>Your order would be delivered as quick as possible</p></li>
                </ul>
              </div>
              <div className="enjoy-food">
                <ul className="paradigm-style">
                  <li><img src={meal} /></li>
                  <li><h4>Get the treat</h4></li>
                  <li><p>Enjoy food items</p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
       </div>
     );
  }
}

export default HomePage;