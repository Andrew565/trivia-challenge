import { observable, computed, action } from "mobx";
import QuestionStore from "./QuestionStore";

export default class Game {
  @observable answers = [];
  @observable questionStore = new QuestionStore();

  constructor() {
    this.questionStore.getQuestions();
  }

  @computed
  get numberOfCorrectAnswers() {
    return this.answers.filter(answer => answer.correct).length;
  }

  @action
  logAnswer(questionNumber, answer) {
    const answerCorrectness = this.questionStore.questions[questionNumber].getAnswerCorrectness(answer);
    this.answers[questionNumber] = answerCorrectness;
  }
}
