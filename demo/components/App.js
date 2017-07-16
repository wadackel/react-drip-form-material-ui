/* eslint-disable react/prop-types */
import React from 'react';
import SampleForm from './SampleForm';

export default () => (
  <div>
    <header>
      <div className="container">
        <h1>react drip form</h1>
        <p>Material-UI component set for react-drip-form.</p>
      </div>
    </header>

    <div className="container">
      <h2>Sample Form:</h2>
      <SampleForm
        onValidSubmit={(values) => {
          alert('See Console'); // eslint-disable-line no-alert
          console.log(values);
        }}
      />
    </div>

    <footer>
      <div className="container">
        <p>© 2017 tsuyoshiwada.<br />react drip form Release under the MIT.</p>
      </div>
    </footer>
  </div>
);
