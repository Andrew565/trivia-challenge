import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: rgb(217, 40, 35);
  color: white;
  outline: none;
`;

class App extends React.Component {
  startGame = () => {
    // TODO: this
    alert("new game starting");
  };

  render() {
    return (
      <main>
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
        <Button id="BeginButton" onClick={this.startGame}>
          BEGIN
        </Button>
      </main>
    );
  }
}

export default App;
