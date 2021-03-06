import React from "react";
import { observer } from "mobx-react";
import Game from "./models/Game";
import * as Pages from "./pages";

@observer
class App extends React.Component {
  render() {
    const showIntro = !Game.started && !Game.ended;
    const showQuestions = Game.started && !Game.ended;
    const showSummary = Game.started && Game.ended;

    return (
      <main>
        {showIntro && <Pages.Intro onClick={Game.startGame} />}
        {showQuestions && <Pages.Questions />}
        {showSummary && <Pages.Summary />}
      </main>
    );
  }
}

export default App;
