import React, { useState, useEffect } from "react";
import { withAuth } from "./../context/auth-context";

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
    <div>
      <form onSubmit={handleSubmit}>
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
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button>Log in</button>
      </form>
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
