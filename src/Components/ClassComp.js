import { Component } from "react";
class ElementsClass extends Component {
  //name = "Ahmed";
  Styles = {
    style1: {
      backgroundColor: "red",
      textAlign: "right",
      color: "blue",
    },
    style2: {
      backgroundColor: "blue",
      textAlign: "center",
      color: "yellow",
    },
  };
  getData = (e) => {
    this.setState({ name: e.target.value });
  };
  resetText = (e) => {
    this.setState({ name: "" });
  };
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.getData} />
        <p>{this.state.name}</p>
        <button onClick={this.resetText}>Reset</button>
      </div>
    );
  }
}

export default ElementsClass;
