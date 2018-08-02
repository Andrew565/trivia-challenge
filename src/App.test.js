import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Game from "./models/Game";

Enzyme.configure({ adapter: new Adapter() });

let theApp;

beforeEach(() => {
  theApp = mount(<App />);
});

it("renders a 'begin' button", () => {
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
