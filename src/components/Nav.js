import React, { Component } from "react";
import "../styles/Nav.css";
import "../styles/Pages.css";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../Pages/Home";
import Documents from "../Pages/Documents";
import Vocal from "../Pages/Vocal";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";

class Nav extends Component {
  state = {};
  handleClick = () => {
    console.log("click");
  };
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ul className="nav">
          <li>
            <NavLink onClick={this.handleClick} to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/documents">Documents</NavLink>
          </li>
          <li>
            <NavLink to="/vocal">Vocal</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/documents" component={Documents} />
          <Route path="/vocal" component={Vocal} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default Nav;
