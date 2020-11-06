import React from "react";
import classes from "./NavBar.css";
import { NavLink } from "react-router-dom";

const navBar = () => (
  <ul className={classes.Ul}>
    <li className={classes.Il}>
      <NavLink to="/" exact activeClassName={classes.ActiveLink}>
        Quiz
      </NavLink>
    </li>
    <li className={classes.Il}>
      <NavLink to="/profile/zakaria" exact activeClassName={classes.ActiveLink}>
        My Profile
      </NavLink>
    </li>
  </ul>
);

export default navBar;
