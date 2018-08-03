import qS from "./QuestionStore";
import Question from "./Question";

beforeAll(() => {
  return qS.getQuestions();
});

it("should retrieve 10 questions", () => {
  expect(qS.questions.length).toBe(10);
});

test("questions should be of type Question", () => {
  expect(qS.questions[0]).toBeInstanceOf(Question);
});

it("should start with a currentQuestionId of null", () => {
  expect(qS.currentQuestionId).toBe(null);
});
