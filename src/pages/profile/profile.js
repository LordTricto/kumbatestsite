import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/items/itemsAction/itemsAction";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import PreferenceCard from "../../components/PreferenceCard/PreferenceCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import usePageTransition from "../../hooks/pageTransition";
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
  const [pageTransition] = usePageTransition();
  const { user, likes, dislikes } = useSelector(mapState);
  useEffect(() => {
    // Fetch Data
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <motion.div
      variants={pageTransition}
      animate="animate"
      exit="exit"
      className="container"
    >
      <div className="profile_content">
        {/* Side Content*/}
        <div className="profile_content_aside">
          <ProfileCard {...user} />
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
    </motion.div>
  );
};

export default Profile;
