import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'


const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));