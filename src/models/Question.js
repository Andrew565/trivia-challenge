export default class Question {
  constructor(data) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });

    this.answers = this.shuffleAnswers([].concat(this.correct_answer, this.incorrect_answers));
  }

  shuffleAnswers(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }

  getAnswerCorrectness = submitted_answer => {
    const { question } = this;
    const correct = submitted_answer === this.correct_answer;
    return { correct, correct_answer: this.correct_answer, question, submitted_answer };
  };
}
