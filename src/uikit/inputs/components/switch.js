import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../styles/uikitInputsSwitch.module.scss';

const Switch = ({
  id,
  className,
  value,
  label,
  labelPosition,
  isDisabled,
  onChange,
}) => (
  <div
    className={classnames(styles.element, className, {
      [styles.isLabelPositionedLeft]: labelPosition === 'left',
      [styles.isDisabled]: isDisabled,
    })}
  >
    <input
      checked={value}
      className={styles.input}
      disabled={isDisabled}
      id={id}
      onChange={(event) => onChange(event.target.checked)}
      type="checkbox"
    />
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  </div>
);

Switch.defaultProps = {
  id: '',
  className: '',
  value: false,
  label: '',
  labelPosition: 'right',
  isDisabled: false,
  onChange: () => {},
};

Switch.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.bool,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default React.memo(Switch);
