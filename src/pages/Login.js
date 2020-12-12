import React, { useState, useEffect } from "react";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";
import mollecules from "./../images/file (1).png";
import "./../PageStyles/Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError(props.loginError);
  }, [props.loginError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(email, password);
  };

  return (
    <div className="login-container">
      <div className="home__image-container">
        <img className="home__image" src={mollecules} alt="logo" />
      </div>
      <div className="login__form">
        <motion.form
          initial={{ x: "250vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 1, duration: 1.2 }}
          onSubmit={handleSubmit}
        >
          <input
            className="login__input"
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="Email"
          />
          <input
            className="login__input"
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Password"
          />
          <br />
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
            }}
            className="login__button navbar__button"
          >
            Log in
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="login__p"
          >
            Don't have an account yet? Sign up here
          </motion.p>
        </motion.form>
      </div>

      <div>
        {error.includes("401") ? (
          <p>Seems like you typed the wrong password!</p>
        ) : null}
        {error.includes("404") ? (
          <p>looks like that email doesn't have an account!</p>
        ) : null}
      </div>
    </div>
  );
}

export default withAuth(Login);
