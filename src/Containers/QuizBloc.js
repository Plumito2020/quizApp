import React, { Component } from "react";
import Choice from "../Components/Choice/Choice";
import Question from "../Components/Question/Question";

class QuizBloc extends Component {
  state = {
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

  render() {
    let choiceList = this.state.quiz[this.state.index];
    let choices = choiceList.answers.map((answer) => (
      <Choice key={answer} label={answer} />
    ));
    return (
      <div className="QuizBloc">
        <Question question={this.state.quiz[this.state.index].question} />
        {choices}
      </div>
    );
  }
}

export default QuizBloc;
