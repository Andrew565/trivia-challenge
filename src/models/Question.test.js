import Question from "./Question";

var data = {
  category: "Entertainment: Video Games",
  type: "boolean",
  difficulty: "hard",
  question: "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
  correct_answer: "True",
  incorrect_answers: ["False"]
};

let question;

beforeAll(() => {
  question = new Question(data);
});

test("question category should match", () => {
  expect(question.category).toBe(data.category);
});

it("should return a boolean true for answerIsTrue", () => {
  expect(question.answerIsTrue()).toBeTruthy();
});
