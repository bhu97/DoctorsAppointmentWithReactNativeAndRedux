import React from 'react';

import {Provider} from 'react-redux';
import store from './src/store/Store';

import Navigation from './src/routes/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
