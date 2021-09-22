import React from "react";
import food from "../../assets/food.jpg";
import { Link } from "react-router-dom";
import "./style.css";
function CartItem({ ...item }) {
  return (
    <>
      <div className="cart">
        <div className="cart_first">
          <div className="cart_first_image">
            <img src={food} alt="food" />
          </div>
          <div className="cart_first_text">
            <span className="cart_first_text_name">{item.name}</span>
            <span className="cart_first_text_category">
              Category: {item.category}
            </span>
          </div>
        </div>
        <div className="cart_second">
          <Link to="/">
            <span className="cart_second_edit">Edit</span>
          </Link>
          <span className="cart_second_quantity">
            Quantity: {item.quantity}
          </span>
          <span className="cart_second_price">₦{item.subTotal_price}</span>
        </div>
      </div>
    </>
  );
}

export default CartItem;
