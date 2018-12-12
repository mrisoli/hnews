import * as React from "react";

import * as T from "./types";

import upvote from "../../../static/sort-up.png";

interface IStoryProps {
    story: T.IStory;
}

interface IStoryState {
  active: boolean;
}

export class Story extends React.Component<IStoryProps, IStoryState> {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  public render() {
    return (
        <div className={`story${this.state.active ? " active" : "" }`} onClick={this.handleClick}>
          <div className="score-block">
            <img className="upvote" src={upvote} />
            {this.props.story.score}
          </div>
          <div className="content">
            <div className="story-title">
              {this.props.story.title}
            </div>
            <div className="story-author">
              By {this.props.story.user}
            </div>
            <div className="text-preview">
              {this.props.story.text}
            </div>
          </div>
        </div>
    );
  }

  private handleClick() {
    this.setState({active: !this.state.active});
  }
}

export default Story;
