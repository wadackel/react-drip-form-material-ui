import React from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import { RadioButton as MuiRadioButton } from 'material-ui/RadioButton';
import ErrorLabel from './internal/ErrorLabel';
import defaultProps from './internal/defaultFieldProps';


export const RadioButton = (props) => {
  const {
    input: {
      onChange,
      ...input
    },
    meta,
    shouldDisplayError,
    errorLabelStyle,
    labelText,
    ...rest
  } = props;

  const displayError = shouldDisplayError(props);

  return (
    <span>
      <MuiRadioButton
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

RadioButton.propTypes = FieldPropTypes;


export default dripFormField('radio', {
  defaultProps,
})(RadioButton);
