import React from "react";
import { shallow } from "enzyme";
import Intro from "./Intro";

const onClick = jest.fn();
let intro;

beforeEach(() => {
  intro = shallow(<Intro onClick={onClick} />);
});

it("renders a 'begin' button", () => {
  expect(
    intro
      .find("#BeginButton")
      .children()
      .text()
  ).toBe("BEGIN");
});

it("calls onClick when the begin button is clicked", () => {
  intro
    .find("#BeginButton")
    .at(0)
    .simulate("click");
  expect(onClick).toHaveBeenCalled();
});
