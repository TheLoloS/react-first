import React, { Component } from "react";

class VisibilityControl extends Component {
  render() {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkBox"
          checked={this.props.isChecked}
          onChange={(e) => this.props.callback(e.target.checked)}
        />
        <label className="form-chech-label">
          Pokaż {this.props.description}
        </label>
      </div>
    );
  }
}

export default VisibilityControl;
