import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: rgb(217, 40, 35);
  color: white;
  outline: none;
`;

const Intro = ({ onClick }) => (
  <React.Fragment>
    <h1>Welcome to the Trivia Challenge!</h1>
    <p>You will be presented with 10 True or False questions.</p>
    <p>Can you score 100%?</p>
    <Button id="BeginButton" onClick={onClick}>
      BEGIN
    </Button>
  </React.Fragment>
);



export default Intro;
