import React from "react";
import { withAuth } from "./../context/auth-context";

function Home() {
  return (
    <div className="home__container">
      <div className="home__image-container"></div>
    </div>
  );
}

export default withAuth(Home);
