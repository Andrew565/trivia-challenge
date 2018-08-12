import React from "react";
import { computed } from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";
import QuestionStore from "../models/QuestionStore";
import Game from "../models/Game";

const AnswerButton = styled.button`
  border-radius: 0.5em;
  font-size: 2em;
  outline: none;
  border: none;
`;

@observer
export default class Questions extends React.Component {
  @computed
  get currentQuestion() {
    return QuestionStore.currentQuestion;
  }

  submitAnswer(answer) {
    Game.logAnswer(answer);
  }

  render() {
    return this.currentQuestion && this.currentQuestion.category ? (
      <React.Fragment>
        <h1>{this.currentQuestion.category}</h1>
        <p dangerouslySetInnerHTML={{ __html: this.currentQuestion.question }} />
        {this.currentQuestion.answers().map((answer, i) => (
          <AnswerButton key={i} className="answer-button" onClick={this.submitAnswer} value={answer}>
            {answer}
          </AnswerButton>
        ))}
      </React.Fragment>
    ) : (
      <h1>Loading</h1>
    );
  }
}
