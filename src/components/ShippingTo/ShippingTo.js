import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const ShippingTo = ({ ...data }) => {
  return (
    <div className="shippingTo">
      <div className="shippingTo_head">
        <span className="shippingTo_head_text">Shipping To</span>
        <Link to="/">
          <span className="shippingTo_head_edit">Edit</span>
        </Link>
      </div>
      <div className="shippingTo_body">
        <div className="shippingTo_body_details">
          <span className="shippingTo_body_details_top">{data.name}</span>
          <span className="shippingTo_body_details_middle">{data.address}</span>
          <span className="shippingTo_body_details_bottom">{data.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default ShippingTo;
