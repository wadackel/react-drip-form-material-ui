import React from 'react';
import { dripForm, FormPropTypes } from 'react-drip-form';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
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
} from '../../src/';


const SampleForm = ({ handlers }) => (
  <form onSubmit={handlers.onSubmit}>
    <div>
      <TextField
        fullWidth
        name="title"
        label="Title"
        floatingLabelText="Title"
        hintText="Enter title"
      />

      <TextField
        fullWidth
        name="url"
        label="URL"
        floatingLabelText="URL"
        hintText="Enter your site url"
      />

      <TextField
        fullWidth
        multiLine
        rows={4}
        rowsMax={10}
        name="description"
        label="Description"
        floatingLabelText="Description"
        hintText="Enter a description"
      />
    </div>

    <div>
      <AutoComplete
        fullWidth
        name="tags"
        floatingLabelText="Tags"
        hintText="Enter tag names"
        dataSource={[
          'diary',
          'javascript',
          'memo',
          'react',
          'technology',
          'todo',
        ]}
      />
      <pre>
        <code>{`// dataSource
[
  'diary',
  'javascript',
  'memo',
  'react',
  'technology',
  'todo',
]`}</code>
      </pre>
    </div>

    <FieldGroup
      multiple
      name="category"
      label="Category"
      style={{ margin: '2em 0' }}
    >
      <label>Category:</label>
      <Checkbox value="cat1" labelText="Category 1" />
      <Checkbox value="cat2" labelText="Category 2" />
      <Checkbox value="cat3" labelText="Category 3" />
    </FieldGroup>

    <FieldGroup
      name="status"
      label="Status"
      value="private"
      style={{ margin: '2em 0 0' }}
    >
      <label>Status:</label>
      <RadioButton value="private" labelText="Private" />
      <RadioButton value="public" labelText="Public" />
      <RadioButton value="draft" labelText="Draft" />
    </FieldGroup>

    <div>
      <SelectField
        fullWidth
        name="library"
        label="Library"
        floatingLabelText="Library"
      >
        <MenuItem value="react" primaryText="React" />
        <MenuItem value="angular" primaryText="Angular" />
        <MenuItem value="vue" primaryText="Vue" />
        <MenuItem value="mithril" primaryText="Mithril" />
        <MenuItem value="riot" primaryText="Riot" />
      </SelectField>
    </div>

    <div>
      <DatePicker
        fullWidth
        name="releaseDate"
        label="Release Date"
        floatingLabelText="Release Date"
        hintText="Select release date"
      />

      <TimePicker
        fullWidth
        name="releaseTime"
        label="Release Time"
        floatingLabelText="Release Time"
        hintText="Select release time"
      />
    </div>

    <div style={{ marginTop: '2em' }}>
      <label>Rating:</label>
      <Slider
        name="rating"
        label="Rating"
        min={0}
        max={100}
        step={1}
      />
    </div>

    <div>
      <Toggle
        name="confirm"
        value="yes"
        label="Confirm"
        labelText="I agree to the Terms of Use"
        labelPosition="right"
      />
    </div>

    <div
      style={{
        margin: '4em 0 0',
        textAlign: 'center',
      }}
    >
      <RaisedButton
        primary
        label="Submit"
        onClick={handlers.onSubmit}
      />
    </div>
  </form>
);

SampleForm.propTypes = FormPropTypes;


export default dripForm({
  validations: {
    title: {
      required: true,
      max: 30,
    },
    url: {
      required: true,
      url: true,
    },
    description: {
      required: true,
      between: {
        min: 15,
        max: 255,
      },
    },
    tags: {
      required: true,
    },
    category: {
      required: true,
      max: 2,
    },
    status: {
      required: true,
      notIn: ['public'],
    },
    library: {
      required: true,
    },
    releaseDate: {
      required: true,
      after: new Date(),
    },
    releaseTime: {
      required: true,
    },
    rating: {
      required: true,
    },
    confirm: {
      required: true,
    },
  },
  messages: {
    status: {
      notIn: 'Can\'t select "public" in the demo !',
    },
  },
})(SampleForm);
