import React from "react";
import styled from "styled-components";

const StyledIntro = styled.div`
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

const Intro = ({ onClick }) => (
  <StyledIntro>
    <h1>Welcome to the Trivia Challenge!</h1>
    <p>You will be presented with 10 multiple choice questions.</p>
    <p>Can you score 10/10?</p>
    <Button id="BeginButton" onClick={onClick}>
      BEGIN
    </Button>
  </StyledIntro>
);

export default Intro;
