import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import ColorPicker from '../components/colorPicker';
import getDefaultColors from '../helpers/getDefaultColors';

const ColorPickerContainer = createReactClass({
  propTypes: {
    className: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string,
    onChange: PropTypes.func,
  },

  getDefaultProps() {
    return {
      className: '',
      colors: getDefaultColors(),
      value: '',
      onChange: () => {},
    };
  },

  getInitialState() {
    return { value: this.props.value };
  },

  onChange(color) {
    this.setState({ value: color });
    this.props.onChange(color);
  },

  render() {
    const { className, colors } = this.props;

    return (
      <ColorPicker
        className={className}
        colors={colors}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  },
});

export default ColorPickerContainer;
