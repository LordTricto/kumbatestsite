import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/items/itemsAction/itemsAction";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PreferenceCard from "../../components/PreferenceCard/PreferenceCard";
import smile from "../../assets/smile.jpg";
import "./style.css";
const mapState = (state) => {
  return {
    user: state.user,
    likes: state.likes,
    dislikes: state.dislikes,
  };
};
const Profile = () => {
  const dispatch = useDispatch();
  const { user, likes, dislikes } = useSelector(mapState);
  useEffect(() => {
    // Fetch Data
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="profile_content">
        {/* Side Content*/}
        <div className="profile_content_aside">
          {/* Side Content Picture and Name*/}
          <div className="profile_content_aside_top">
            <div className="profile_content_aside_top_image">
              <img src={smile} alt="smile" />
            </div>
            <span className="profile_content_aside_top_name">{user.name}</span>
          </div>
          {/* Side Content Picture and Name*/}
          {/* Side Content Address and Phone Number*/}
          <div className="profile_content_aside_bottom">
            <div className="profile_content_aside_bottom_phone">
              <div className="profile_content_aside_bottom_phone_icon">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className="profile_content_aside_bottom_phone_text">
                {user.phone}
              </div>
            </div>
            <div className="profile_content_aside_bottom_address">
              <div className="profile_content_aside_bottom_address_icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="profile_content_aside_bottom_address_text">
                {user.address}
              </div>
            </div>
          </div>
          {/* Side Content Address and Phone Number*/}
        </div>
        {/* Side Content*/}
        {/* Main Content*/}
        <div className="profile_content_main">
          {/* About Section*/}
          <div className="profile_content_main_about">
            <div className="profile_content_main_about_head">About</div>
            <div className="profile_content_main_about_body">
              <div className="profile_content_main_about_body_text">
                {user.about}
              </div>
            </div>
          </div>
          {/* About Section*/}
          {/* Likes Section*/}
          <div className="profile_content_main_likes">
            <div className="profile_content_main_likes_head">Likes</div>
            <div className="profile_content_main_likes_body">
              {likes.map((like, index) => {
                return <PreferenceCard data={like} key={index} />;
              })}
            </div>
          </div>
          {/* Likes Section*/}
          {/* dislikes Section*/}
          <div className="profile_content_main_dislikes">
            <div className="profile_content_main_dislikes_head">Dislikes</div>
            <div className="profile_content_main_dislikes_body">
              {dislikes.map((dislike, index) => {
                return <PreferenceCard data={dislike} key={index} />;
              })}
            </div>
          </div>
          {/* dislikes Section*/}
        </div>
        {/* Main Content*/}
      </div>
    </div>
  );
};

export default Profile;
