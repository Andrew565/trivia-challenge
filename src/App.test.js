import React from "react";
import { mount } from "enzyme";
import App from "./App";
import Game from "./models/Game";

let theApp;

beforeAll(() => {
  theApp = mount(<App />);
});

it("starts on the intro page and renders a 'begin' button", () => {
  expect(
    theApp
      .find("#BeginButton")
      .children()
      .text()
  ).toBe("BEGIN");
});

it("calls startGame when the begin button is clicked", () => {
  expect(Game.started).toBeFalsy();
  theApp
    .find("#BeginButton")
    .at(0)
    .simulate("click");
  expect(Game.started).toBeTruthy();
});
