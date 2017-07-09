# react-drip-form-material-ui

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/react-drip-form-material-ui.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/react-drip-form-material-ui)
[![Codecov](https://img.shields.io/codecov/c/github/tsuyoshiwada/react-drip-form-material-ui.svg?style=flat-square)](https://codecov.io/gh/tsuyoshiwada/react-drip-form-material-ui)
[![npm version](https://img.shields.io/npm/v/react-drip-form-material-ui.svg?style=flat-square)](http://badge.fury.io/js/react-drip-form-material-ui)

> [Material-UI](https://github.com/callemall/material-ui) component set for [react-drip-form](https://github.com/tsuyoshiwada/react-drip-form).

https://tsuyoshiwada.github.io/react-drip-form-material-ui/




## Table Of Contents

* [DEMO](#demo)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
* [API](#api)
  * [shouldDisplayError](#shoulddisplayerror)
  * [Change label to labelText](#change-label-to-labeltext)
  * [errorLabelStyle](#errorlabelstyle)
* [Related projects](#related-projects)
* [Contribute](#contribute)
* [License](#license)




## DEMO

[![Screenshot](https://raw.githubusercontent.com/tsuyoshiwada/react-drip-form-material-ui/artwork/demo-screenshot.png)](https://tsuyoshiwada.github.io/react-drip-form-material-ui/)

See [Live Demo](https://tsuyoshiwada.github.io/react-drip-form-material-ui/).




## Getting Started

### Installation

[react-drip-form](https://github.com/tsuyoshiwada/react-drip-form) must also be installed.

```bash
$ npm install --save react-drip-form
$ npm install --save react-drip-form-material-ui
```


### Usage

```javascript
import React from 'react';
import { dripForm } from 'react-drip-form';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  FieldGroup,
  RadioButton,
  SelectField,
  Slider,
  TextField,
  TimePicker,
  Toggle,
} from 'react-drip-material-ui';


export default dripForm({/* form options */})(({ handlers }) => (
  <form onSubmit={handlers.onSubmit}>
    {/* TextField */}
    <TextField
      name="title"
      label="Title"
      floatingLabelText="Title"
      hintText="Enter title"
    />

    {/* TextField (multi line) */}
    <TextField
      name="description"
      label="Description"
      multiLine
      rows={4}
      rowsMax={10}
      floatingLabelText="Description"
      hintText="Enter a description"
    />

    {/* Select field */}
    <SelectField
      name="library"
      label="Library"
      floatingLabelText="Library"
    >
      <MenuItem value="react" primaryText="React" />
      <MenuItem value="angular" primaryText="Angular" />
      <MenuItem value="vue" primaryText="Vue" />
    </SelectField>

    {/* Checkbox with FieldGroup field */}
    <FieldGroup
      multiple
      name="category"
      label="Category"
    >
      <Checkbox value="cat1" labelText="Category 1" />
      <Checkbox value="cat2" labelText="Category 2" />
      <Checkbox value="cat3" labelText="Category 3" />
    </FieldGroup>

    {/* Radio with FieldGroup field (default value = 'private') */}
    <FieldGroup
      name="status"
      label="Status"
      value="private"
    >
      <RadioButton value="private" labelText="Private" />
      <RadioButton value="public" labelText="Public" />
      <RadioButton value="draft" labelText="Draft" />
    </FieldGroup>

    {/* Date Picker */}
    <DatePicker
      name="releaseDate"
      label="Release Date"
      floatingLabelText="Release Date"
      hintText="Select release date"
    />

    {/* Time Picker */}
    <TimePicker
      name="releaseTime"
      label="Release Time"
      floatingLabelText="Release Time"
      hintText="Select release time"
    />

    {/* Slider */}
    <Slider
      name="rating"
      label="Rating"
      min={0}
      max={100}
      step={1}
    />

    {/* Toggle */}
    <Toggle
      name="confirm"
      value="yes"
      label="Confirm"
      labelText="I agree to the Terms of Use"
      labelPosition="right"
    />

    <RaisedButton
      primary
      label="Submit"
      onClick={handlers.onSubmit}
    />
  </form>
));
```

For actual use, [demo/components/SampleForm.js](./demo/components/SampleForm.js) source code may be helpful!




## API

Almost the [Material-UI](https://github.com/callemall/material-ui) API can be used as it is except that `name` prop is mandatory.  
I will explain the differences from the Material-UI API here.


### shouldDisplayError

This function accepts the properties of the field and makes a decision whether to display an error.  
If you want to display an error you need to return `true`.

By default the following code is used.

```javascript
({ meta }) => !!(meta.error && meta.dirty && meta.touched)
```


### Change label to labelText

In `react-drip-form`, `label` is a property with special meaning.  
Therefore, rename the `label` attribute that can be specified with `<Toggle />` etc. to `labelText`.

```javascript
<Toggle
  name="confirm"
  value="yes"
  label="Confirm"
  labelText="I agree to the Terms of Use"
  labelPosition="right"
/>
```


### errorLabelStyle

The following components control error labels by `react-drip-form-material-ui`.  
You must use `errorLabelStyle` to customize the style of error labels.

* `<Checkbox />`
* `<DatePicker />`
* `<FieldGroup />`
* `<RadioButton />`
* `<Slider />`
* `<TimePicker />`
* `<Toggle />`

```javascript
<DatePicker
  name="releaseDate"
  errorLabelStyle={{
    // your custom style
    color: 'hotpink',
  }}
/>
```



## Related projects

* [tsuyoshiwada/react-drip-form](https://github.com/tsuyoshiwada/react-drip-form)




## Contribute

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/react-drip-material-ui/issues).




## License

[MIT © tsuyoshiwada](./LICENSE)

