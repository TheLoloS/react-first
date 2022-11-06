import React, { Component } from "react";

class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { newItemText: "" };
  }

  updateNexTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    this.props.callback(this.state.newItemText);
    this.setState({ newItemText: "" });
  };

  render() {
    return (
      <div className="my-1">
        <input
          className="form-control"
          value={this.state.newItemText}
          onChange={this.updateNexTextValue}
        />
        <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
          Nowe zadanie
        </button>
      </div>
    );
  }
}

export default TodoCreator;
