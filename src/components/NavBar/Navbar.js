import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import "./NavBar.css";
import { withAuth } from "../../context/auth-context";
import { motion } from "framer-motion";

function Navbar(props) {
  let history = useHistory();
  let location = useLocation();
  const handleSignOut = () => {
    props.logout();
    history.push("/");
  };

  const handleLogInClick = () => {
    history.push("/login");
  };

  const handleSignUpClick = () => {
    history.push("/signup");
  };

  const handleProfileClick = () => {
    history.push(`/profile/${props.user._id}`);
  };

  console.log(location);

  return (
    <div className="navbar__container">
      {location.pathname !== "/" ? (
        <Link className="navbar__home-link" to="/">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            flavorlab
          </motion.p>
        </Link>
      ) : (
        <div></div>
      )}
      {props.isLoggedIn ? (
        <div className="navbar__username-container">
          <motion.button
            onClick={handleSignOut}
            whileHover={{ boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)" }}
            className="navbar__button"
          >
            Sign out
          </motion.button>

          <motion.button
            whileHover={{ boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)" }}
            onClick={handleProfileClick}
            className="navbar__button"
          >
            Profile
          </motion.button>
        </div>
      ) : (
        <div className="navbar__username-container">
          <motion.button
            whileHover={{ boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)" }}
            onClick={handleSignUpClick}
            className="navbar__button"
          >
            Sign Up
          </motion.button>
          <motion.button
            whileHover={{ boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)" }}
            onClick={handleLogInClick}
            className="navbar__button"
          >
            Login
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default withAuth(Navbar);
