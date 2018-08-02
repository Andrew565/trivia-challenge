export default class Question {
  constructor(data) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  answerIsTrue = () => {
    return this.correct_answer === "True";
  };

  getAnswerCorrectness = submitted_answer => {
    const { question } = this;
    const correct = submitted_answer === this.answerIsTrue();
    return { question, correct };
  };
}
