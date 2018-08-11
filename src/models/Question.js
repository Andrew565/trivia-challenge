export default class Question {
  constructor(data) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  getAnswerCorrectness = submitted_answer => {
    const { question } = this;
    const correct = "" + submitted_answer === this.correct_answer.toLowerCase();
    return { question, submitted_answer, correct };
  };
}
