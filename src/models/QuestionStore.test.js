import QuestionStore from "./QuestionStore";
import Question from "./Question";

let qS;

beforeAll(() => {
  qS = new QuestionStore();
  return qS.getQuestions();
});

it("should retrieve 10 questions", () => {
  expect(qS.questions.length).toBe(10);
});

test("questions should be of type Question", () => {
  expect(qS.questions[0]).toBeInstanceOf(Question);
});
