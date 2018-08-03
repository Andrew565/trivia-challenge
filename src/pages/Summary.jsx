import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import Game from "../models/Game";

const Button = styled.button`
  background: rgb(217, 40, 35);
  font-size: 2em;
  border-radius: 0.5em;
  color: white;
  outline: none;
  border: none;
`;

const List = styled.ul`
  list-style: none;
  -webkit-padding-start: 0;
`;

const CorrectIndicator = styled.strong`
  margin-right: 1em;
`;

const SubmittedAnswer = styled.span`
  margin-left: 1em;
`;

const Summary = observer(() => (
  <React.Fragment>
    <h1>You scored</h1>
    <h1>{Game.numberOfCorrectAnswers}/10</h1>
    <List>
      {Game.answers.map(answer => (
        <li key={answer.question}>
          <CorrectIndicator>{answer.correct ? "+" : "–"}</CorrectIndicator>
          <span dangerouslySetInnerHTML={{ __html: answer.question }} />
          <SubmittedAnswer>You answered: {answer.submitted_answer ? "True" : "False"}</SubmittedAnswer>
        </li>
      ))}
    </List>
    <Button id="NewGameButton" onClick={Game.startGame}>
      PLAY AGAIN?
    </Button>
  </React.Fragment>
));

export default Summary;
