import React from "react";
import { mount } from "enzyme";
import Questions from "./Questions";
import Question from "../models/Question";
import QuestionStore from "../models/QuestionStore";

let submitAnswer = jest.fn();

Questions.prototype.submitAnswer = submitAnswer;

let questions = mount(<Questions />);

describe("before questions are loaded into the store", () => {
  it("renders a loading message by default", () => {
    expect(questions.find("h1").text()).toMatch(/loading/i);
  });
});

describe("after questions are loaded into the store", () => {
  let question;

  beforeEach(() => {
    var data = {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "hard",
      question: "In which game did the character &quot;Mario&quot; make his first appearance?",
      correct_answer: "Donkey Kong",
      incorrect_answers: ["Super Mario Bros.", "Super Mario Land", "Mario Bros."]
    };

    question = new Question(data);
    QuestionStore.questions.push(question);
    QuestionStore.currentQuestionId = 0;

    questions.update();
  });

  it("renders a question and 1 button per answer", () => {
    expect(questions.find("p").length).toBeGreaterThan(0);
    expect(questions.find("button").length).toBe(question.answers().length);
  });

  it("calls the submitAnswer function when clicking an answer button", () => {
    questions
      .find("button")
      .at(0)
      .simulate("click");
    expect(questions.instance().submitAnswer).toHaveBeenCalled();
  });
});
