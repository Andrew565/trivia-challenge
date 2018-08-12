export default class Question {
  constructor(data) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  answers = () => {
    return [].concat(this.correct_answer, this.incorrect_answers);
  };

  getAnswerCorrectness = submitted_answer => {
    const { question } = this;
    const correct = submitted_answer === this.correct_answer;
    return { question, submitted_answer, correct };
  };
}
