import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ColorPickerColor from './colorPickerColor';
import styles from '../styles/colorPicker.module.scss';

const ColorPicker = ({
  className,
  colors,
  onChange,
  value,
}) => (
  <div className={classnames(styles.element, className)}>
    {colors.map((color) => (
      <ColorPickerColor
        color={color}
        isSelected={color === value}
        onChange={onChange}
      />
    ))}
  </div>
);

ColorPicker.defaultProps = {
  className: '',
  colors: [],
  value: '',
  onChange: () => {},
};

ColorPicker.propTypes = {
  className: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default React.memo(ColorPicker);
