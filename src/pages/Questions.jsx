import React from "react";
import { computed } from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";
import QuestionStore from "../models/QuestionStore";
import Game from "../models/Game";

const FalseButton = styled.button`
  background: rgb(217, 40, 35);
  border-radius: 0.5em;
  font-size: 2em;
  color: white;
  outline: none;
`;

const TrueButton = styled.button`
  background: green;
  border-radius: 0.5em;
  font-size: 2em;
  color: white;
  outline: none;
`;

@observer
export default class Questions extends React.Component {
  @computed
  get currentQuestion() {
    return QuestionStore.currentQuestion;
  }

  render() {
    return this.currentQuestion && this.currentQuestion.category ? (
      <React.Fragment>
        <h1>{this.currentQuestion.category}</h1>
        <p dangerouslySetInnerHTML={{ __html: this.currentQuestion.question }} />
        <TrueButton className="true-button" onClick={() => Game.logAnswer(true)}>
          True
        </TrueButton>
        <FalseButton className="false-button" onClick={() => Game.logAnswer(false)}>
          False
        </FalseButton>
      </React.Fragment>
    ) : (
      <h1>Loading</h1>
    );
  }
}
