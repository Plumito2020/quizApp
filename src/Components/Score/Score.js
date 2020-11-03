import React from "react";
import classes from "./Score.css";
import btnClass from "../../Containers/QuizBloc.css";

const score = (props) => (
  <div className={classes.Score}>
    <h1>Your Score </h1>
    <p>{props.score}</p>
    <button className={btnClass.Button} onClick={props.replay}>
      Replay
    </button>
  </div>
);

export default score;
