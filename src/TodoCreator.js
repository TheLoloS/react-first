import React, { Component } from "react";

class TodoCreator extends Component {
  constructor(props) {
    super();
  }
  state = { newItemText: "" };

  updateNexTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(
        (item) => item.action === this.state.newItemText
      )
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          {
            action: this.state.newItemText,
            done: false,
          },
        ],
        newItemText: "",
      });
    }
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
          Dodaj
        </button>
      </div>
    );
  }
}

export default TodoCreator;
