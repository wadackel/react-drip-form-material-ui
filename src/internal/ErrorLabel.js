import React from 'react';
import PropTypes from 'prop-types';

const ErrorLabel = (
  { children, style },
  { muiTheme: { textField, prepareStyles } }
) => (
  <div
    style={prepareStyles({
      position: 'relative',
      marginTop: 5,
      fontSize: 12,
      lineHeight: '12px',
      color: textField.errorColor,
      ...(style || {}),
    })}
  >
    {children}
  </div>
);

ErrorLabel.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

ErrorLabel.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

ErrorLabel.defaultProps = {
  style: {},
};

export default ErrorLabel;
