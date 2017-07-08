import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'; // eslint-disable-line import/no-extraneous-dependencies
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';

injectTapEventPlugin();

const root = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <Component />
      </MuiThemeProvider>
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
}
