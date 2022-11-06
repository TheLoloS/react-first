import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      todoItems: [
        {
          action: "zadanie 1",
          done: false,
        },
        {
          action: "zadanie 2",
          done: true,
        },
        {
          action: "zadanie 3",
          done: true,
        },
        {
          action: "zadanie 4",
          done: false,
        },
      ],
      newItemText: "",
    };
  }

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

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  todoTableRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleTodo(item)}
          />
        </td>
      </tr>
    ));

  render = () => {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          lista zadań użytkownika {this.state.userName}
          (Liczba zadań: {this.state.todoItems.filter((a) => !a.done).length})
        </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input
              className="form-control"
              value={this.state.newItemText}
              onChange={this.updateNexTextValue}
            />
            <button
              className="btn btn-primary mt-1"
              onClick={this.createNewTodo}
            >
              Dodaj
            </button>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>opis</th>
                <th>Wykonane</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default App;
