import Question from "./Question";

var data = {
  category: "Entertainment: Video Games",
  type: "multiple",
  difficulty: "hard",
  question: "In which game did the character &quot;Mario&quot; make his first appearance?",
  correct_answer: "Donkey Kong",
  incorrect_answers: ["Super Mario Bros.", "Super Mario Land", "Mario Bros."]
};

let question;

beforeAll(() => {
  question = new Question(data);
});

test("question category should match", () => {
  expect(question.category).toBe(data.category);
});

it("should compile the answers into a single array", () => {
  expect(question.answers()).toMatchObject(["Donkey Kong", "Super Mario Bros.", "Super Mario Land", "Mario Bros."]);
});

it("should return a certain object when checking correctness", () => {
  expect(question.getAnswerCorrectness("Donkey Kong")).toMatchObject({
    question: "In which game did the character &quot;Mario&quot; make his first appearance?",
    correct: true
  });
});
