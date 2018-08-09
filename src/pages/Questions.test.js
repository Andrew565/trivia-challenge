import React from "react";
import { mount } from "enzyme";
import Questions from "./Questions";
import Question from "../models/Question";
import QuestionStore from "../models/QuestionStore";
import { Game } from "../models/Game";

let trueClick = jest.fn();
let falseClick = jest.fn();

Questions.prototype.trueClick = trueClick;
Questions.prototype.falseClick = falseClick;

let questions = mount(<Questions />);
let game = new Game();

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
      type: "boolean",
      difficulty: "hard",
      question: "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    };

    question = new Question(data);
    QuestionStore.questions.push(question);
    QuestionStore.currentQuestionId = 0;

    questions.update();
  });

  it("renders a question and at least two buttons", () => {
    expect(questions.find("p").length).toBeGreaterThan(0);
    expect(questions.find("button").length).toBeGreaterThan(1);
  });

  it("calls the trueClick function when clicking the true button", () => {
    questions
      .find(".true-button")
      .at(0)
      .simulate("click");
    expect(questions.instance().trueClick).toHaveBeenCalled();
  });

  it("calls the falseClick function when clicking the false button", () => {
    questions
      .find(".false-button")
      .at(0)
      .simulate("click");
    expect(questions.instance().falseClick).toHaveBeenCalled();
  });
});
