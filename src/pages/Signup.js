import React, { useState, useEffect } from "react";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";
import mollecules from "./../images/file (1).png";
import { Link } from "react-router-dom";
import "./../PageStyles/Login.css";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup, signUpError } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);
    setName("");
    setPassword("");
    setEmail("");
    setError(signUpError);
  };

  useEffect(() => {
    setError(signUpError);
  }, [signUpError]);

  return (
    <div className="login-container">
      <div className="home__image-container">
        <img className="home__image" src={mollecules} alt="logo" />
      </div>
      <motion.form
        initial={{ x: "250vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.6, duration: 1.2 }}
        className="login__form"
        onSubmit={handleSubmit}
      >
        <input
          className="login__input"
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          placeholder="Name"
          required
        />
        <input
          className="login__input"
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="Email"
          required
        />
        <input
          className="login__input"
          placeholder="Password"
          type="password"
          value={password}
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 11px 1px rgba(255,20,147,1)",
          }}
          className="login__button navbar__button"
        >
          sign up
        </motion.button>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="login__p"
        >
          Already have an account?{" "}
          <Link to="/login" style={{ color: "yellow" }}>
            Log in here
          </Link>
        </motion.p>
        <div>
          {error.includes("400") ? (
            <p className="login__p" style={{ color: "white" }}>
              Sorry this Email has already been taken
            </p>
          ) : null}
        </div>
      </motion.form>
    </div>
  );
}

export default withAuth(Signup);
