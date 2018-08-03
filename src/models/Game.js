import { observable, computed, action } from "mobx";
import QuestionStore from "./QuestionStore";

export class Game {
  @observable answers = [];
  @observable started = false;
  @observable ended = false;

  @computed
  get numberOfCorrectAnswers() {
    return this.answers.filter(answer => answer.correct).length;
  }

  @action
  startGame() {
    this.started = true;
    this.ended = false;
    QuestionStore.currentQuestionId = 0;
  }

  @action
  checkForGameEnd() {
    const nextId = QuestionStore.getNextQuestionId() + 1;

    if (nextId === QuestionStore.questions.length) this.ended = true;
  }

  @action
  logAnswer(answer) {
    const answerCorrectness = QuestionStore.currentQuestion.getAnswerCorrectness(answer);
    this.answers[QuestionStore.currentQuestionId] = answerCorrectness;

    this.checkForGameEnd();
  }
}

const game = new Game();
export default game;
