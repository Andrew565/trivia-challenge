import React from "react";
import { computed } from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";
import QuestionStore from "../models/QuestionStore";
import Game from "../models/Game";

const StyledQuestions = styled.div`
  background: white;
  border-radius: 0.5em;
  padding: 1.5em;
`;

const AnswerButton = styled.div`
  border-radius: 0.5em;
  border: 1px solid rgb(94, 91, 210);
  margin: 0.5em 0;
  padding: 0.25em 0.5em;

  &:hover {
    background: rgb(94, 91, 210);
    color: white;
    cursor: pointer;
  }
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
      <StyledQuestions>
        <h1>{this.currentQuestion.category}</h1>
        <p dangerouslySetInnerHTML={{ __html: this.currentQuestion.question }} />
        {this.currentQuestion.answers.map((answer, i) => (
          <AnswerButton
            key={i}
            className="answer-button"
            onClick={this.submitAnswer.bind(this, answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </StyledQuestions>
    ) : (
      <h1>Loading</h1>
    );
  }
}
