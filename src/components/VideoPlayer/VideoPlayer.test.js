import { shallow } from "enzyme";
import React from "react";

import VideoPlayer from "./VideoPlayer";

describe("<VideoPlayer />", () => {
    it("should render", () => {
        const wrapper = shallow(<VideoPlayer />);

        expect(wrapper).toBeDefined();
    });
});