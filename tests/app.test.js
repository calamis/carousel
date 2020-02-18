import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/index.js";
import Slider from "../components/carousel.js";

describe("With Enzyme", () => {
  it('Slider display lists of slides "slider"', () => {
    const app = shallow(<Slider />);

    expect(app.find("div").text()).toEqual("slider");
  });
});

describe("With Snapshot Testing", () => {
  it('Slider display lists of slides "slider"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});