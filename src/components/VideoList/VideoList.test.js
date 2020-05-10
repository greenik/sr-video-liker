import { shallow } from "enzyme";
import React from "react";

import VideoList from "./VideoList";

describe("<VideoList />", () => {
    it("should render", () => {
        const wrapper = shallow(<VideoList />);

        expect(wrapper).toBeDefined();
    });
});