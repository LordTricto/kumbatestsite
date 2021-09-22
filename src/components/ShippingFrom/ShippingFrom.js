import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const ShippingFrom = ({ ...data }) => {
  return (
    <div className="shippingFrom">
      <div className="shippingFrom_head">
        <span className="shippingFrom_head_text">Shipping From</span>
        <Link to="/">
          <span className="shippingFrom_head_edit">Edit</span>
        </Link>
      </div>
      <div className="shippingFrom_body">
        <div className="shippingFrom_body_details">
          <span className="shippingFrom_body_details_name">{data.name}</span>
          <span className="shippingFrom_body_details_address">
            {data.street}, {data.city}, {data.state}
          </span>
        </div>
        <span className="shippingFrom_body_seeAll">See All</span>
      </div>
    </div>
  );
};

export default ShippingFrom;
