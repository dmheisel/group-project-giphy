import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios'
//redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
//saga imports
import createSagaMiddleware from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'

//SAGA stuff
function* rootSaga() {
  yield takeEvery('FETCH_SEARCH', fetchSearch)
}

//fetch route
function* fetchSearch(action) {
  try {
    axios.post('/')
  } catch (error) {

  }
}


//REDUX REDUCERS


const store = createStore(
  combineReducers({}),
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
