import React from "react";

import Auxiliary from "../../hoc/Auxiliary";
import QuizBloc from "../../Containers/QuizBloc";

const layout = () => {
  return (
    <Auxiliary>
      <div>This , will hold the navbar</div>
      <QuizBloc />
    </Auxiliary>
  );
};

export default layout;
