import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../styles/colorPickerColor.module.scss';

const ColorPickerColor = ({
  color,
  isSelected,
  onChange,
  isDisabled,
}) => (
  <button
    className={classnames(styles.element, {
      [styles.isSelected]: isSelected,
      [styles.isDisabled]: isDisabled,
    })}
    disabled={isDisabled}
    onClick={() => onChange(color)}
    type="button"
  >
    <div className={styles.inner} style={{ backgroundColor: color }} />
  </button>
);

ColorPickerColor.defaultProps = {
  color: '',
  isSelected: false,
  onChange: () => {},
  isDisabled: false,
};

ColorPickerColor.propTypes = {
  color: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default React.memo(ColorPickerColor);
