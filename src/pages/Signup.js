import React, { useState, useEffect } from "react";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError(props.signUpError);
  }, [props.signUpError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signup(name, email, password);
  };

  return (
    <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          type="password"
          value={password}
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>sign up</button>
      </form>
      <div>
        {error.includes("401") ? (
          <p>that email address is already in use!</p>
        ) : null}

        {error.includes("400") ? (
          <p>I think you forgot to fill in the form!</p>
        ) : null}
      </div>
    </motion.div>
  );
}

export default withAuth(Signup);
