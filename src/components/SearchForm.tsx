import * as React from "react";

export interface ISearchFormState {
  value: string;
}

export default class extends React.Component<{}, ISearchFormState> {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <form className="search-box" onSubmit={this.handleSubmit}>
        <label>
          Search:
        </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  }

  private handleChange(event) {
    this.setState({value: event.target.value});
  }

  private handleSubmit(event) {
    window.location.href = `https://hn.algolia.com/?query=${this.state.value}`;
    event.preventDefault();
  }
}
