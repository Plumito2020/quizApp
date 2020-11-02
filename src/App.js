import React, { Component } from "react";
import "./App.css";
import QuizBloc from "./Containers/QuizBloc";
import Auxiliary from "./hoc/Auxiliary";

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <QuizBloc />
        <button>Next</button>
      </Auxiliary>
    );
  }
}

export default App;
