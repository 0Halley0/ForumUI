import { Component } from "react";

class ClassComponentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.countPlusHandleClick = this.countPlusHandleClick.bind(this);
    this.countMinusHandleClick = this.countMinusHandleClick.bind(this);
  }
  countPlusHandleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  countMinusHandleClick(data) {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h1>Class Example</h1>
        <p>Count:{this.state.count}</p>
        <button
          className="btn btn-primary ms-2"
          onClick={this.countPlusHandleClick}
        >
          +
        </button>
        <button
          className="btn btn-secondary ms-2"
          onClick={this.countMinusHandleClick}
        >
          -
        </button>
      </div>
    );
  }
}

export default ClassComponentExample;
