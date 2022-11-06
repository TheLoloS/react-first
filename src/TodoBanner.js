import React, { Component } from "react";

class TodoBanner extends Component {
  render = () => {
    return (
      <h4 className="bg-primary text-white text center p-2">
        Lista zadań użytkownika {this.props.name}
        (Liczba zadań: {this.props.tasks.filter((a) => !a.done).length})
      </h4>
    );
  };
}

export default TodoBanner;
