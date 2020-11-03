import React from "react";
import { Route } from "react-router-dom";

import Auxiliary from "../../hoc/Auxiliary";
import QuizBloc from "../../Containers/QuizBloc";
import NavBar from "../../Components/NavBar/NavBar";

const layout = () => {
  return (
    <Auxiliary>
      <NavBar />
      <Route exact path="/" component={QuizBloc} />
      <Route exact path="/profile" render={() => <p>Profile page</p>} />
    </Auxiliary>
  );
};

export default layout;
