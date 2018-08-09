import React from "react";
import { mount } from "enzyme";
import Game from "../models/Game";
import Summary from "./Summary";

var answer1 = { question: "Test 1", correct: true };
var answer2 = { question: "Test 2", correct: false };

Game.answers.push(answer1, answer2);

let summary = mount(<Summary />);

it("should render the correct number of correct answers", () => {
  expect(summary.find("h1#numberCorrect").text()).toBe("1/10");
});

it("should have two li elements for displaying answers", () => {
  expect(summary.find("li").length).toBe(2);
});

it("should render a + sign for the correct answer", () => {
  expect(
    summary
      .find("li")
      .at(0)
      .find("strong")
      .text()
  ).toBe("+");
});

it("should render a - sign for the incorrect answer", () => {
  expect(
    summary
      .find("li")
      .at(1)
      .find("strong")
      .text()
  ).toBe("–");
});
