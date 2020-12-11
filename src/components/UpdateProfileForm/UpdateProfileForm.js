import Axios from "axios";
import React, { useState, useEffect } from "react";
import { withAuth } from "../../context/auth-context";
import axios from "axios";

function UpdateProfileForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, [props.name, props.email]);

  return (
    <div>
      <form onSubmit={(e) => props.update(e, name, email)}>
        <input
          type="text"
          value={name}
          name="email"
          onChange={(e) => setName(e.target.value)}
          autoComplete="email"
        />
        <input
          type="email"
          value={email}
          name="password"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="current-password"
        />
        <button>Update</button>
      </form>
    </div>
  );
}

export default withAuth(UpdateProfileForm);
