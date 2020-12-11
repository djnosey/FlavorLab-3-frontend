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
import { AnimatePresence } from "framer";

function App() {
  const location = useLocation();
  return (
    <div className="container">
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
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
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
