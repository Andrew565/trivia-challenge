import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import Game from "../models/Game";

const StyledSummary = styled.div`
  color: white;
`;

const Button = styled.button`
  background: rgb(221, 10, 91);
  font-size: 18px;
  font-weight: bold;
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  color: white;
  outline: none;
  border: none;
`;

const List = styled.ul`
  list-style: none;
  -webkit-padding-start: 0;
`;

const ListItem = styled.li`
  margin: 1em 0;
`;

const CorrectIndicator = styled.strong`
  margin-right: 1em;
`;

const SubmittedAnswer = styled.span`
  color: yellow;
`;

const CorrectAnswer = styled.span`
  margin-left: 1em;
  color: yellow;
`;

const Summary = observer(() => (
  <StyledSummary>
    <h1>You scored</h1>
    <h1 id="numberCorrect">{Game.numberOfCorrectAnswers}/10</h1>
    <List>
      {Game.answers.map(answer => (
        <ListItem key={answer.question}>
          <CorrectIndicator>{answer.correct ? "+" : "–"}</CorrectIndicator>
          <span dangerouslySetInnerHTML={{ __html: answer.question }} />
          <br />
          <SubmittedAnswer dangerouslySetInnerHTML={{ __html: `You answered: ${answer.submitted_answer}` }} />
          <CorrectAnswer dangerouslySetInnerHTML={{ __html: `The correct answer was: ${answer.correct_answer}` }} />
        </ListItem>
      ))}
    </List>
    <Button id="NewGameButton" onClick={Game.startGame}>
      PLAY AGAIN?
    </Button>
  </StyledSummary>
));

export default Summary;
