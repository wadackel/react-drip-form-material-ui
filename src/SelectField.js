import React, { Component } from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import MuiSelectField from 'material-ui/SelectField';
import defaultProps from './internal/defaultFieldProps';


export class SelectField extends Component {
  static propTypes = FieldPropTypes;

  handleChange = (e, key, payload) => {
    this.props.input.onChange(payload);
  };

  render() {
    const {
      input: {
        onChange,
        ...input
      },
      props: {
        children,
        shouldDisplayError,
        ...rest
      },
      meta,
    } = this.props;

    const displayError = shouldDisplayError(this.props);

    return (
      <MuiSelectField
        {...rest}
        {...input}
        onChange={this.handleChange}
        errorText={displayError ? meta.error : null}
      >
        {children}
      </MuiSelectField>
    );
  }
}


export default dripFormField('select', {
  defaultProps,
})(SelectField);
