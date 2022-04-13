import React from "react";
import Addbutton from "./Addbutton";


const OrderPage = ({ flavors }) => {
  
  return (
    <>
      <div className="item">
        <p>{flavors}</p>
      </div>
      <div className="itemamount">
        <div className="item">
        <Addbutton/>
          
        </div>
      </div>
    </>
  );
};

export default OrderPage;
