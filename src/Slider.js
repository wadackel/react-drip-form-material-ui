import React, { Component } from 'react';
import { dripFormField, FieldPropTypes } from 'react-drip-form';
import MuiSlider from 'material-ui/Slider';
import ErrorLabel from './internal/ErrorLabel';
import defaultProps from './internal/defaultFieldProps';


const formatter = value => value == null ? undefined : parseFloat(value);


export class Slider extends Component {
  static propTypes = FieldPropTypes;

  handleChange = (e, value) => {
    this.props.input.onChange(value);
  };

  render() {
    const {
      input: {
        onChange,
        ...input
      },
      meta,
      shouldDisplayError,
      errorLabelStyle,
      ...rest
    } = this.props;

    const displayError = shouldDisplayError(this.props);

    return (
      <span>
        <MuiSlider
          {...rest}
          {...input}
          onChange={this.handleChange}
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

Slider.propTypes = FieldPropTypes;


export default dripFormField('number', {
  defaultProps: {
    ...defaultProps,
    formatter,
  },
})(Slider);
