import React from "react";
import { computed } from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";
import QuestionStore from "../models/QuestionStore";
import { Game } from "../models/Game";

const FalseButton = styled.button`
  background: rgb(217, 40, 35);
  color: white;
  outline: none;
`;

const Questions = observer(() => {
  const question = computed(() => QuestionStore.currentQuestion);

  const answerFalse = () => {
    Game.logAnswer(false);
  };

  const answerTrue = () => {
    Game.logAnswer(true);
  };

  return (
    <React.Fragment>
      <h1>{question.category}</h1>
      <p>{question.question}</p>
      <FalseButton className="false-button" onClick={answerFalse}>
        False
      </FalseButton>
    </React.Fragment>
  );
});

export default Questions;
