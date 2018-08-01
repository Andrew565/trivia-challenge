import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import "jest";

Enzyme.configure({ adapter: new Adapter() });

let theApp;

beforeEach(() => {
  theApp = shallow(<App />);
});

it("renders without crashing", () => {
  expect(theApp).toBeDefined();
});

it("renders a 'begin' button", () => {
  expect(
    theApp
      .find("#BeginButton")
      .children()
      .text()
  ).toBe("BEGIN");
});
