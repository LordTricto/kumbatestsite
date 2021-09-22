import React, { useEffect } from "react";
import logo from "../../assets/visa.png";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/items/itemsAction/itemsAction";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  selectCartSubTotal,
  selectCartItemsCount,
  selectCartTaxTotal,
  selectCartTotal,
} from "../../redux/items/itemsSelector/itemsSelector";
import CartItem from "../../components/CartItem/CartItem";
import ShippingFromCard from "../../components/ShippingFrom/ShippingFrom";
import ShippingToCard from "../../components/ShippingTo/ShippingTo";
import usePageTransition from "../../hooks/pageTransition";
import "./style.css";

const mapState = (state) => {
  return {
    totalNumberCart: selectCartItemsCount(state),
    subTotal: selectCartSubTotal(state),
    taxTotal: selectCartTaxTotal(state),
    total: selectCartTotal(state),
    user: state.user,
    restaurant: state.restaurant,
    items: state.items,
  };
};

const OrderSummary = () => {
  const dispatch = useDispatch();
  const [pageTransition] = usePageTransition();
  const {
    items,
    restaurant,
    user,
    total,
    taxTotal,
    subTotal,
    totalNumberCart,
  } = useSelector(mapState);

  useEffect(() => {
    // Fetch Data
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <motion.div
      variants={pageTransition}
      animate="animate"
      exit={"exit"}
      className="container"
    >
      <main className="main">
        {/* Head of Page */}
        <div className="main_head">
          <div className="main_head_header">
            <span className="main_head_header_text">Order Summary</span>
          </div>
          <div className="main_head_cta">
            <button className="main_head_cta_button">
              <span className="main_head_cta_button_text">Place Order</span>
            </button>
          </div>
        </div>
        {/* Head of Page */}
        {/* Body of Page */}
        <div className="main_body">
          {/* Welcome Section */}
          <div className="main_body_head">
            <span className="main_body_head_header">Hi {user.name},</span>
            <p className="main_body_head_paragraph">
              Please check your order carefully and then press the “Place Order”
              button to confirm, once an order is placed we will not be able to
              make any changes to your order.
            </p>
          </div>
          {/* Welcome Section */}
          {/* Main Content Section */}
          <div className="main_body_body">
            {/* General Details */}
            <div className="main_body_body_details">
              {/* Shipping Details */}
              <div className="main_body_body_details_delivery">
                <div className="main_body_body_details_delivery_head">
                  <span className="main_body_body_details_delivery_head_header">
                    Delivery Details
                  </span>
                </div>
                <div className="main_body_body_details_delivery_body">
                  <ShippingFromCard {...restaurant} />
                  <ShippingToCard {...user} />
                </div>
              </div>
              {/* Shipping Details */}
              {/* Payment Details */}
              <div className="main_body_body_details_payment">
                <div className="main_body_body_details_payment_head">
                  <span className="main_body_body_details_payment_head_header">
                    Payment Details
                  </span>
                </div>
                <div className="main_body_body_details_payment_body">
                  <div className="main_body_body_details_payment_body_details">
                    <div className="main_body_body_details_payment_body_details_image">
                      <img src={logo} alt="visa" />
                    </div>
                    <div className="main_body_body_details_payment_body_details_text">
                      <span className="main_body_body_details_payment_body_details_text_cardEnd">
                        Visa ending in
                        <span className="main_body_body_details_payment_body_details_text_cardEnd--bold">
                          1607
                        </span>
                      </span>
                      <span className="main_body_body_details_payment_body_details_text_cardExpire">
                        {" "}
                        Expires
                        <span className="main_body_body_details_payment_body_details_text_cardExpire--bold">
                          07/2023
                        </span>
                      </span>
                    </div>
                  </div>
                  <Link to="/">
                    <span className="main_body_body_details_payment_body_edit">
                      Edit
                    </span>
                  </Link>
                </div>
              </div>
              {/* Payment Details */}
              {/* Cart Details */}
              <div className="main_body_body_details_cart">
                <div className="main_body_body_details_cart_head">
                  <span className="main_body_body_details_cart_head_header">
                    Your Cart
                  </span>
                </div>
                <div className="main_body_body_details_cart_body">
                  {items.map((item, index) => {
                    return <CartItem {...item} key={index} />;
                  })}
                </div>
              </div>
              {/* Cart Details */}
            </div>
            {/* General Details */}
            {/* Summary Details */}
            <div className="main_body_body_summary">
              <div className="main_body_body_summary_head">
                <span className="main_body_body_summary_head_header">
                  Summary
                </span>
              </div>
              <div className="main_body_body_summary_body">
                <div className="main_body_body_summary_body_top">
                  <div className="main_body_body_summary_body_top_items">
                    <span className="main_body_body_summary_body_top_items_count">
                      {totalNumberCart} Items
                    </span>

                    <span className="main_body_body_summary_body_top_items_price">
                      ₦{subTotal}
                    </span>
                  </div>
                  <div className="main_body_body_summary_body_top_delivery">
                    <span className="main_body_body_summary_body_top_delivery_text">
                      Delivery
                    </span>

                    <span className="main_body_body_summary_body_top_delivery_price">
                      ₦1,000.00
                    </span>
                  </div>
                  <div className="main_body_body_summary_body_top_tax">
                    <span className="main_body_body_summary_body_top_tax_text">
                      Tax
                    </span>

                    <span className="main_body_body_summary_body_top_tax_price">
                      ₦{taxTotal}
                    </span>
                  </div>
                </div>
                <div className="main_body_body_summary_body_middle"></div>
                <div className="main_body_body_summary_body_bottom">
                  <div className="main_body_body_summary_body_top_total">
                    <span className="main_body_body_summary_body_top_total_text">
                      Total
                    </span>

                    <span className="main_body_body_summary_body_top_total_price">
                      ₦{total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Summary Details */}
          </div>
          {/* Main Content Section */}
        </div>
        {/* Body of Page */}
      </main>
    </motion.div>
  );
};

export default OrderSummary;
