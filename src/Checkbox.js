import React from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import MuiCheckbox from 'material-ui/Checkbox';
import ErrorLabel from './internal/ErrorLabel';
import defaultProps from './internal/defaultFieldProps';


export const Checkbox = (props) => {
  const {
    input: {
      onChange,
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
      <MuiCheckbox
        {...rest}
        {...input}
        onCheck={onChange}
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

Checkbox.propTypes = FieldPropTypes;


export default dripFormField('checkbox', {
  defaultProps,
})(Checkbox);
