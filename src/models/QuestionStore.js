import { computed, observable, action } from "mobx";
import Question from "./Question";
import "whatwg-fetch"; // fetch polyfill

export class QuestionStore {
  @observable questions = [];
  @observable currentQuestionId = null;

  @computed
  get currentQuestion() {
    return this.currentQuestionId !== null &&
      this.questions.length > 0 &&
      this.currentQuestionId <= this.questions.length
      ? this.questions[this.currentQuestionId]
      : null;
  }

  @action
  getNextQuestionId() {
    return this.currentQuestionId++;
  }

  @action
  getQuestions() {
    return fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          resp.text().then(text => {
            throw new Error(text);
          });
        }
      })
      .then(json => {
        this.questions = json.results.map(question => new Question(question));
      })
      .catch(e => {
        console.error("an error occurred:", e.message);
      });
  }
}

const questionStore = new QuestionStore();
export default questionStore;
