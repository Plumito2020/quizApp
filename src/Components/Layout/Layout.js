import React from "react";
import { Route } from "react-router-dom";

import Auxiliary from "../../hoc/Auxiliary";
import QuizBloc from "../../Containers/QuizBloc";
import NavBar from "../../Components/NavBar/NavBar";
import Profile from "../../Components/Profile/Profile";

const layout = () => {
  return (
    <Auxiliary>
      <NavBar />
      <Route exact path="/" component={QuizBloc} />
      <Route exact path="/profile/:name" component={Profile} />
    </Auxiliary>
  );
};

export default layout;
