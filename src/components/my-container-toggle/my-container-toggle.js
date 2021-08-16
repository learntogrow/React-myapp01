import React, { Component } from 'react';
import ToggleButton from '../toggle-button/toggle-button';


class MyContainerToggle extends Component {
    constructor() {
      super();
      this.state = { checked: false }
    }

    onChildChanged(newState) {
      this.setState({ checked: newState })
    }

    render() { return <div>
      <h6>Check box: Toggle </h6>

      <div>Is it checked ? {this.state.checked ? 'yes' : 'no'}</div>
        <ToggleButton text="Toggle it"
                      initialChecked={this.state.checked}
                      mycallbackParent={(newState) => this.onChildChanged(newState) } />{/* mycallbackParent is variable containg funtion pointer its wrapper to parent function*/}
      </div>
    }
}

export default MyContainerToggle ;