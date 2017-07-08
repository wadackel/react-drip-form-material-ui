import React, { Component } from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import MuiTimePicker from 'material-ui/TimePicker';
import ErrorLabel from './internal/ErrorLabel';
import defaultProps from './internal/defaultFieldProps';


const formatter = value => value || null;


export class TimePicker extends Component {
  static propTypes = FieldPropTypes;

  handleChange = (_, date) => {
    this.props.input.onChange(date);
    this.props.input.onBlur();
  };

  render() {
    const {
      input: {
        onChange,
        onBlur,
        ...input
      },
      props: {
        shouldDisplayError,
        errorLabelStyle,
        ...rest
      },
      meta,
    } = this.props;

    const displayError = shouldDisplayError(this.props);

    return (
      <span>
        <MuiTimePicker
          {...rest}
          {...input}
          onChange={this.handleChange}
          onDismiss={onBlur}
        />

        {displayError &&
          <ErrorLabel style={errorLabelStyle}>
            {meta.error}
          </ErrorLabel>
        }
      </span>
    );
  }
}

export default dripFormField('text', {
  defaultProps: {
    ...defaultProps,
    formatter,
  },
})(TimePicker);
