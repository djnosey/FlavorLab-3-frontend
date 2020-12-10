import React from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import { withAuth } from "../../context/auth-context";

function Navbar(props) {
  let history = useHistory();
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

  return (
    <div className="navbar__container">
      {props.isLoggedIn ? (
        <div className="navbar__username-container">
          <button onClick={handleSignOut} className="navbar__button">
            Sign out
          </button>
          <button onClick={handleProfileClick} className="navbar__button">
            Profile
          </button>
        </div>
      ) : (
        <div className="navbar__button-container">
          <button onClick={handleSignUpClick} className="navbar__button">
            Sign Up
          </button>
          <button onClick={handleLogInClick} className="navbar__button">
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default withAuth(Navbar);
