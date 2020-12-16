import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import "./NavBar.css";
import { withAuth } from "../../context/auth-context";
import { motion } from "framer-motion";

function Navbar(props) {
  let history = useHistory();
  let location = useLocation();
  const { logout, isLoggedIn, user } = props;

  const handleSignOut = () => {
    logout();
    history.push("/");
  };

  return (
    <div className="navbar__container">
      {location.pathname !== "/" ? (
        <Link className="navbar__home-link" to="/">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            flavorlab.
          </motion.p>
        </Link>
      ) : (
        <div></div>
      )}
      {isLoggedIn ? (
        <div className="navbar__username-container">
          <motion.button
            onClick={handleSignOut}
            whileHover={{ boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)" }}
            className="navbar__button"
          >
            Sign out
          </motion.button>

          {location.pathname !== `/profile/${user._id}` ? (
            <Link to={`/profile/${user._id}`}>
              <motion.button
                whileHover={{
                  boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
                }}
                className="navbar__button"
              >
                Profile
              </motion.button>
            </Link>
          ) : (
            <Link to={`/primary`}>
              <motion.button
                whileHover={{
                  boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
                }}
                className="navbar__button"
              >
                New creation!
              </motion.button>
            </Link>
          )}
        </div>
      ) : (
        <div className="navbar__username-container">
          <Link to="/signup">
            <motion.button
              whileHover={{ boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)" }}
              className="navbar__button"
            >
              Sign Up
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button
              whileHover={{ boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)" }}
              className="navbar__button"
            >
              Login
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default withAuth(Navbar);
