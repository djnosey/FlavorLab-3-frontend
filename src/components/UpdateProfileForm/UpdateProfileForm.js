import React, { useState, useEffect } from "react";
import { withAuth } from "../../context/auth-context";
import "./UpdateProfileForm.css";
import "./../../PageStyles/Login.css";

function UpdateProfileForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   setName(props.name);
  //   setEmail(props.email);
  // }, [props.name, props.email]);

  return (
    <div className="UpdateProfileForm__container">
      <form
        className="UpdateProfileForm__form"
        onSubmit={(e) => props.update(e, name, email)}
      >
        <input
          className="login__input edit"
          type="text"
          value={name}
          name="email"
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          placeholder="Name"
        />
        <input
          className="login__input edit"
          type="email"
          value={email}
          name="password"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="Email"
        />
        <button onClick={props.handleUpdate} className="navbar__button">
          Update
        </button>
        <button onClick={props.toggleForm} className="navbar__button">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default withAuth(UpdateProfileForm);
