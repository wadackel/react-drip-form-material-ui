import React from 'react';
import { dripFormGroup, GroupPropTypes } from 'react-drip-form';
import ErrorLabel from './internal/ErrorLabel';
import defaultProps from './internal/defaultGroupProps';


export const FieldGroup = (props) => {
  const {
    children,
    shouldDisplayError,
    errorLabelStyle,
    meta,
    ...rest
  } = props;

  const displayError = shouldDisplayError(props);

  return (
    <div {...rest}>
      {children}

      {displayError &&
        <ErrorLabel style={errorLabelStyle}>
          {meta.error}
        </ErrorLabel>
      }
    </div>
  );
};

FieldGroup.propTypes = GroupPropTypes;


export default dripFormGroup({
  defaultProps,
})(FieldGroup);
