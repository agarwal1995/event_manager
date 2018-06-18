import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import Create from "./component/dashboard/Create";
import Update from "./component/dashboard/Update";

//Check For Token
if (localStorage.jwtToken) {
  // Set auth taken header auth
  setAuthToken(localStorage.jwtToken);
  //Decode Token and get User info
  const decoded = jwt_decode(localStorage.jwtToken);
  //setUser and is Authenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for Expired Token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser());
    //Redirect to Login

    window.location.href = "/login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />

            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />

              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/update" component={Update} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
