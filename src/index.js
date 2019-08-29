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
const sagaMiddleware = createSagaMiddleware()
function* rootSaga() {
  yield takeEvery('FETCH_SEARCH', fetchSearch)
}

//fetch route
function* fetchSearch(action) {
  try {
    let response = yield axios.post('/api/search/', action.payload)
    yield console.log(response.data)
    yield put({type: 'SET_SEARCH_RESULTS', payload: response.data.data})
  } catch (error) {
    console.log('error on GET route from server: ', error)
  }
}


//REDUX REDUCERS
const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return action.payload;
    default:
      return state;
  }
}


const store = createStore(
  combineReducers({searchReducer}),
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
