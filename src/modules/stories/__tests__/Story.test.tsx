import {shallow} from "enzyme";
import * as React from "react";

import Story from "../Story";
import * as T from "../types";

const story: T.IStory = {
  comments: [
    9224,
    8952,
    8917,
  ],
  commentsCount: 71,
  date: new Date("2007-04-04T19:16:40.000Z"),
  id: 8863,
  score: 104,
  text: "",
  title: "My YC app: Dropbox - Throw away your USB drive",
  url: "http://www.getdropbox.com/u/2/screencast.html",
  user: "dhouston",
};

describe("Story", () => {

  it("renders a story", () => {
    const wrapper = shallow(<Story story={story}/>);
    expect(wrapper.find(".story-title").text()).toEqual(story.title);
  });

  it("makes story active", () => {
    const wrapper = shallow(<Story story={story}/>);
    wrapper.find(".story").simulate("click");
    expect(wrapper.find(".story").hasClass("active")).toEqual(true);
  });

  it("toggles active state on multiple clicks", () => {
    const wrapper = shallow(<Story story={story}/>);
    wrapper.find(".story").simulate("click");
    wrapper.find(".story").simulate("click");
    expect(wrapper.find(".story").hasClass("active")).toEqual(false);
  });
});
