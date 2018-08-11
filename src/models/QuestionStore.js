import { computed, observable, action } from "mobx";
import Question from "./Question";
import "whatwg-fetch"; // fetch polyfill

export class QuestionStore {
  @observable questions = [];
  @observable currentQuestionId = null;
  apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple";

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
    return fetch(this.apiUrl)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }

        throw new Error("Network response not ok.");
      })
      .then(json => {
        this.questions = json.results.map(question => new Question(question));
      })
      .catch(err => {
        console.error("an error occurred:", err.message);
        this.questions = [];
        return Promise.resolve([]);
      });
  }
}

const questionStore = new QuestionStore();
export default questionStore;
