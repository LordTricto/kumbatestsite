import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import smile from "../../assets/smile.jpg";
import "./style.css";

const ProfileCard = ({ ...user }) => {
  return (
    <>
      {/* Picture and Name*/}
      <div className="profileCard_top">
        <div className="profileCard_top_image">
          <img src={smile} alt="smile" />
        </div>
        <span className="profileCard_top_name">{user.name}</span>
      </div>
      {/* Picture and Name*/}
      {/* Address and Phone Number*/}
      <div className="profileCard_bottom">
        <div className="profileCard_bottom_phone">
          <div className="profileCard_bottom_phone_icon">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
          <div className="profileCard_bottom_phone_text">{user.phone}</div>
        </div>
        <div className="profileCard_bottom_address">
          <div className="profileCard_bottom_address_icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className="profileCard_bottom_address_text">{user.address}</div>
        </div>
      </div>
      {/* Address and Phone Number*/}
    </>
  );
};

export default ProfileCard;
