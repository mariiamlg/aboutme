import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  constructor(props) {
    super();
    this.rojo = this.rojo.bind(this);
    this.verde = this.verde.bind(this);

    this.state = {
      color: props.color
    };
  }

  rojo() {
    this.setState({
      color: "red"
    });
  }

  verde() {
    this.setState({
      color: "green"
    });
  }

  render() {
    return (
      <div>
        <ColoredText name={this.props.name} color={this.state.color} />
        <button onClick={this.verde}>verde</button>
        <button onClick={this.rojo}>rojo</button>
      </div>
    );
  }
}

class ColoredText extends React.Component {
  render() {
    return (
      <span style={{ color: this.props.color }}>Hello {this.props.name}</span>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="María" color="blue"/>,
  document.querySelector("#root")
);
