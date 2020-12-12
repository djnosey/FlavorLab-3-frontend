import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/NavBar/Navbar";
import Primary from "./pages/Primary";
import FlavourPairingPage from "./pages/FlavourPairingPage";
import Results from "./pages/Results";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="container">
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route path="/primary">
          <Primary />
        </Route>

        <AnonRoute exact path="/signup" component={Signup} />
        <AnonRoute exact path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/pairing/:id"
          component={FlavourPairingPage}
        />
        <PrivateRoute exact path="/results/" component={Results} />
        <PrivateRoute exact path="/profile/:id" component={ProfilePage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
