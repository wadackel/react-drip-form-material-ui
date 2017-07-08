import React from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import MuiToggle from 'material-ui/Toggle';
import ErrorLabel from './internal/ErrorLabel';
import defaultProps from './internal/defaultFieldProps';


export const Toggle = (props) => {
  const {
    input: {
      onChange,
      checked,
      ...input
    },
    props: {
      shouldDisplayError,
      errorLabelStyle,
      labelText,
      ...rest
    },
    meta,
  } = props;

  const displayError = shouldDisplayError(props);

  return (
    <span>
      <MuiToggle
        {...rest}
        {...input}
        defaultChecked={checked}
        onToggle={onChange}
        label={labelText}
      />

      {displayError &&
        <ErrorLabel style={errorLabelStyle}>
          {meta.error}
        </ErrorLabel>
      }
    </span>
  );
};

Toggle.propTypes = FieldPropTypes;


export default dripFormField('checkbox', {
  defaultProps,
})(Toggle);
