import React, { Component } from "react";
import Choice from "../Components/Choice/Choice";
import Question from "../Components/Question/Question";
import Score from "../Components/Score/Score";
import classes from "./QuizBloc.css";

class QuizBloc extends Component {
  state = {
    score: 0,
    maxIndex: 2,
    index: 0,
    selectedOptions: ["", "", ""],
    gameFinished: false,
    correctAnswers: ["Answ1-1", "Answ2-2", "Answ3-2"],
    quiz: [
      {
        id: 1,
        question: "Qst1",
        answers: ["Answ1-1", "Answ1-2", "Answ1-3"],
      },
      {
        id: 2,
        question: "Qst2",
        answers: ["Answ2-1", "Answ2-2", "Answ2-3"],
      },
      {
        id: 3,
        question: "Qst3",
        answers: ["Answ3-1", "Answ3-2", "Answ3-3"],
      },
    ],
  };

  componentDidMount() {
    console.log(this.props);
  }
  generateScore() {
    let finalScore = 0;
    this.state.selectedOptions.forEach((value, index) => {
      if (value === this.state.correctAnswers[index]) {
        finalScore++;
      }
    });
    this.setState({ score: finalScore });
  }
  nextQuestion() {
    const currentIndex = this.state.index;
    if (currentIndex < this.state.maxIndex) {
      this.setState({ index: currentIndex + 1 });
    } else if (currentIndex === 2) {
      this.generateScore();
      this.setState({ gameFinished: true });
    }
  }

  onChangeValue(event) {
    const currentIndex = this.state.index;
    let newSelectedOptions = [...this.state.selectedOptions];
    newSelectedOptions[currentIndex] = event.target.value;
    this.setState({ selectedOptions: newSelectedOptions });
    console.log(this.state.selectedOptions);
  }

  replay() {
    this.setState({
      index: 0,
      score: 0,
      selectedOptions: ["", "", ""],
      gameFinished: false,
    });
  }
  render() {
    let choiceList = this.state.quiz[this.state.index];
    let choices = choiceList.answers.map((answer) => (
      <Choice key={answer} label={answer} value={answer} />
    ));
    return (
      <div className={classes.QuizBloc}>
        <Question question={this.state.quiz[this.state.index].question} />
        <div
          onChange={this.onChangeValue.bind(this)}
          className={classes.Choices}
        >
          {choices}
        </div>

        {this.state.gameFinished ? null : (
          <button
            onClick={this.nextQuestion.bind(this)}
            className={classes.Button}
          >
            Next
          </button>
        )}

        {this.state.gameFinished ? (
          <Score score={this.state.score} replay={this.replay.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default QuizBloc;
