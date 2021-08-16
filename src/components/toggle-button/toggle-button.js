import React, { Component } from "react";

class ToggleButton extends Component {
  constructor({ initialChecked }) { // destructuring props object comming from parent
    super();
    this.state = { checked: initialChecked };
  }

  onTextChanged() {
    const newState = !this.state.checked;
    this.setState({ checked: newState }); // update the state
    this.props.mycallbackParent(newState); //  notify the parent
  }

  render() {
    return (
      <label>
        {this.props.text}:{" "} {/* to create a small gap in browser between togglr button: box in ui */}
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={() => this.onTextChanged()}// binding 'this' using arrow
        />
      </label>
    );
  }
}

export default ToggleButton ;
 