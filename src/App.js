import React, { Component } from "react";
import TodoBanner from "./TodoBanner";
import TodoCreator from "./TodoCreator";
import TodoRow from "./TodoRow";
import VisibilityControl from "./VisibilityControl";
import "./App.css";

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
      showCompleted: true,
    };
  }

  updateNexTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState(
        {
          todoItems: [
            ...this.state.todoItems,
            {
              action: task,
              done: false,
            },
          ],
        },
        () => localStorage.setItem("todos", JSON.stringify(this.state))
      );
    }
  };

  toggleTodo = (todo) => {
    this.setState(
      {
        todoItems: this.state.todoItems.map((item) =>
          item.action === todo.action ? { ...item, done: !item.done } : item
        ),
      },
      () => localStorage.setItem("todos", JSON.stringify(this.state))
    );
  };

  todoTableRows = (doneValue) =>
    this.state.todoItems
      .filter((item) => item.done === doneValue)
      .map((item) => (
        <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
      ));

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
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
            showCompleted: true,
          }
    );
  };

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
            <tbody>{this.todoTableRows(false)}</tbody>
          </table>
          <div className="bg-secondary text-white text-center p-2">
            <VisibilityControl
              description="wykonanie zadania"
              isChecked={this.state.showCompleted}
              callback={(checked) => this.setState({ showCompleted: checked })}
            />
          </div>

          {this.state.showCompleted && (
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Opis</th>
                  <th>Wykonanie</th>
                </tr>
              </thead>
              <tbody>{this.todoTableRows(true)}</tbody>
            </table>
          )}
        </div>
      </div>
    );
  };
}
