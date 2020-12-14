import React from "react";
import "./ProfileDetails.css";
import { motion } from "framer-motion";

function ProfileDetails(props) {
  const { name, email, deleteProfile, editProfile } = props;
  return (
    <div className="profileDetails__container">
      <h1 className="profileDetails__name">Hey {name}!</h1>
      <h4 className="profileDetails__email">{email}</h4>
      <p className="profileDetails__info">
        Here's where you can manage your profile. Edit your details, share or
        remove your saved combinations
      </p>
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
        }}
        id="profileDetails__button"
        className="navbar__button"
        onClick={deleteProfile}
      >
        Delete profile
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
        }}
        className="navbar__button"
        onClick={editProfile}
      >
        Edit Profile
      </motion.button>
    </div>
  );
}

export default ProfileDetails;
