import "./order.css";
import React from "react";
import OrderPage from "./Components/OrderPage";
import Addbutton from "./Components/Addbutton";



class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flavors: [
        "Apple",
        "White Grape",
        "Strawberry Banana",
        "Strawberry Kiwi",
        "Citrus Punch",
        "Peach Mango",
        "Blue Raspberry",
        "Green Watermelon",
        "Orange Raspberry",
        "Cran Apple",
        "Orange Pineapple",
        "Berry",
        "Cherry",
        "Fruit Punch",
        "Tangerine",
      ],
    };
  }

  render() {
    const mappedFlavors = this.state.flavors.map((flavor, index) => {
      return <OrderPage key={index} flavors={flavor} />;
    });
      
    return (
      <div>
        <div className="orderhero">
          <h1 className="ordertext"> Place your order here</h1>
        </div>

        <div className="orderconatiner">
          <form className = 'orderform'>
            <h2 className="formlabel">Full Name</h2>

            <input 
              className="name"
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              required
            ></input>

            <input
              className="name"
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
            ></input>
            <h2 className="formlabel">Phone Number</h2>
            <input className = 'orderinput'
              type="number"
              id="phonenum"
              name="phonenum"
              placeholder="000-000-0000"
              required
            ></input>
            <h2 className="formlabel">Email</h2>
            <input className = 'orderinput'
              type="email"
              id="email"
              name="email"
              placeholder="youremail@example.com"
              required
            ></input>
            <h2 className="formlabel">Delivery Address</h2>
            <input className = 'orderinput'
              type="text"
              id="address"
              name="address"
              placeholder=" Street Address"
              required
            ></input>
            <input className = 'orderinput'
              type="text"
              id="city"
              name="city"
              placeholder="City"
              required
            ></input>
            <input className = 'orderinput'
              type="text"
              id="state"
              name="state"
              placeholder=" State"
              required
            ></input>
            <input className = 'orderinput'
              type="number"
              id="zipcode"
              name="zipcode"
              placeholder="Zip Code"
              required
            ></input>
            <input id="ordersubmitbtn" type="submit"></input>
          </form>

          <div className="productorder">
            <div className="flavors">
              <h2 className="flavorh2">Flavors</h2>
              <div className="item">{mappedFlavors}</div>
               <div className="itemamount">
                 
                <Addbutton/>
              </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Order;