import { shallow } from "enzyme";
import React from "react";

import Video from "./Video";

describe("<Video />", () => {
    it("should render", () => {
        const wrapper = shallow(<Video />);

        expect(wrapper).toBeDefined();
    });
});