import React from "react";

function ProfileDetails(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <button onClick={props.deleteProfile}>delete profile</button>
    </div>
  );
}

export default ProfileDetails;
