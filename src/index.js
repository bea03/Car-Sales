import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';


import 'bulma/css/bulma.css';
import './styles.scss';
// STEP 1 - import createStore, and create a store by passing in a reducer
const store = createStore(reducer);
// STEP 2 - import Provider, wrap the provider component around <App />
// STEP 2a - pass the newly created store into the proivder's store prop
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>, rootElement);
