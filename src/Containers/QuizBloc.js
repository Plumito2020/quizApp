import React, { Component } from "react";
import Choice from "../Components/Choice/Choice";
import Question from "../Components/Question/Question";
import classes from "./QuizBloc.css";

class QuizBloc extends Component {
  state = {
    maxIndex: 2,
    index: 0,
    quiz: [
      {
        id: 1,
        question: "Qst1",
        answers: ["Answ1-1", "Answ1-2", "Answ1-3"],
        correctAnswer: "Answ1-1",
      },
      {
        id: 2,
        question: "Qst2",
        answers: ["Answ2-1", "Answ2-2", "Answ2-3"],
        correctAnswer: "Answ2-2",
      },
      {
        id: 3,
        question: "Qst3",
        answers: ["Answ3-1", "Answ3-2", "Answ3-3"],
        correctAnswer: "Answ3-2",
      },
    ],
  };
  // constructor(props) {
  //   super(props);
  //   this.nextQuestion = this.nextQuestion.bind(this);
  // }

  nextQuestion() {
    let currentIndex = this.state.index;
    this.setState({ index: currentIndex + 1 });
  }

  onChanged(event) {
    console.log(event.);
  }

  render() {
    let choiceList = this.state.quiz[this.state.index];
    let choices = choiceList.answers.map((answer) => (
      <Choice
        key={answer}
        label={answer}
        onChanged={this.onChanged.bind(this)}
      />
    ));
    return (
      <div className={classes.QuizBloc}>
        <Question question={this.state.quiz[this.state.index].question} />
        {choices}
        <button
          onClick={this.nextQuestion.bind(this)}
          className={classes.Button}
        >
          Next
        </button>
      </div>
    );
  }
}

export default QuizBloc;
