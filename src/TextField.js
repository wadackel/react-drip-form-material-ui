import React from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import MuiTextField from 'material-ui/TextField';
import defaultProps from './internal/defaultFieldProps';


export const TextField = (props) => {
  const {
    input,
    props: {
      shouldDisplayError,
      ...rest
    },
    meta,
  } = props;

  const displayError = shouldDisplayError(props);

  return (
    <MuiTextField
      {...rest}
      {...input}
      errorText={displayError ? meta.error : null}
    />
  );
};

TextField.propTypes = FieldPropTypes;


export default dripFormField('text', {
  defaultProps,
})(TextField);
