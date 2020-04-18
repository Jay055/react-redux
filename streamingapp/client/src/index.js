import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';



// import reduxThunk from 'redux-thunk';

import App from './components/App';

// Redux Dev Tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));


ReactDOM.render(
  <Provider store={store}>
     <App />
     </Provider>,
  document.getElementById('root')
);


