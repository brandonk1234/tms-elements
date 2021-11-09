import React from 'react';
import createReactClass from 'create-react-class';
import { Switch } from '../../uikit/inputs';

const SwitchContainer = createReactClass({

  getInitialState() {
    return { checked: false };
  },

  onChange(checked) {
    this.setState({ checked });
  },

  render() {
    return (
      <div style={{ width: '200px', border: '1px solid black' }}>
        <Switch
          id="toggle1"
          label="synthesize"
          labelPosition="left"
          value={this.state.checked}
          onChange={this.onChange}
        />
      </div>
    );
  },
});

export default SwitchContainer;
