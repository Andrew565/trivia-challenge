import { observable, computed, action } from "mobx";
import QuestionStore from "./QuestionStore";

export class Game {
  @observable answers = [];
  @observable started = false;
  @observable ended = false;
  @observable currentQuestion = null;

  @computed
  get numberOfCorrectAnswers() {
    return this.answers.filter(answer => answer.correct).length;
  }

  @action
  startGame() {
    this.started = true;
    this.ended = false;
    this.currentQuestion = 0;
  }

  @action
  logAnswer(questionNumber, answer) {
    const answerCorrectness = QuestionStore.questions[questionNumber].getAnswerCorrectness(answer);
    this.answers[questionNumber] = answerCorrectness;
  }
}

const game = new Game();
export default game;
