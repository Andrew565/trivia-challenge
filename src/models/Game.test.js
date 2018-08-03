import { Game } from "./Game";
import QuestionStore from "./QuestionStore";
import Question from "./Question";

var data1 = {
  category: "Development: Testing",
  type: "boolean",
  difficulty: "hard",
  question: "Tests are good",
  correct_answer: "True",
  incorrect_answers: ["False"]
};
var data2 = {
  category: "Development: Testing",
  type: "boolean",
  difficulty: "hard",
  question: "Tests are bad",
  correct_answer: "False",
  incorrect_answers: ["True"]
};

let question1, question2, game;

beforeEach(() => {
  question1 = new Question(data1);
  QuestionStore.questions[0] = question1;

  question2 = new Question(data2);
  QuestionStore.questions[1] = question2;

  game = new Game();
  QuestionStore.currentQuestionId = 0;
});

it("should allow a correct answer to be logged", () => {
  game.logAnswer(true);
  expect(game.answers[0]).toMatchObject({
    question: "Tests are good",
    correct: true
  });
});

it("should allow an incorrect answer to be logged", () => {
  game.logAnswer(false);
  expect(game.answers[0]).toMatchObject({
    question: "Tests are good",
    correct: false
  });
});

it("should count the number of correct answers correctly", () => {
  game.logAnswer(true);
  game.logAnswer(true); // This one is an incorrect answer
  expect(game.numberOfCorrectAnswers).toBe(1);
});

it("should start out with game.started === false", () => {
  expect(game.started).toBeFalsy();
});

test("after answering all questions, game.ended === true", () => {
  expect(game.ended).toBeFalsy();
  game.logAnswer(true);
  game.logAnswer(true);
  expect(game.ended).toBeTruthy();
});
