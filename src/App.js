import React, { Component } from "react";
import TodoBanner from "./TodoBanner";
import TodoCreator from "./TodoCreator";
import TodoRow from "./TodoRow";

// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      userName: "Piotr",
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
      // newItemText: "",
    };
  }

  updateNexTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          {
            action: this.state.newItemText,
            done: false,
          },
        ],
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
      <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
    ));

  render = () => {
    return (
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
        <div className="container-fluid">
          <TodoCreator callback={this.createNewTodo} />
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

//  App;
