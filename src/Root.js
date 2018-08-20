import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
const configureStore = store()
const Root = () => {
  return (
    <Provider store={configureStore}>
      <App />
    </Provider>
  );
};

export default Root;