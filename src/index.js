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
  yield takeEvery('REMOVE_FAV', removeFav)
  yield takeEvery('FETCH_SEARCH', fetchSearch);
  yield takeEvery('FETCH_FAVS', fetchFavorites);
  yield takeEvery('POST_FAV', postFavorite);
}

//remove route
function* removeFav(action) {
  try {
    yield axios.delete(`/api/favorite/${action.payload}`)
    yield console.log('succes in DELETE route');

    yield put({type: 'FETCH_FAVS'})
  } catch (error) {
    yield console.log('error in DELETE route:', error);

  }
}


//fetch route
function* fetchSearch(action) {
  try {
    let response = yield axios.post('/api/search/', action.payload)
    yield console.log(response.data)
    yield put({type: 'SET_SEARCH_RESULTS', payload: response.data.data})
  } catch (error) {
    yield console.log('error on GET route from server: ', error)
  }
}

function* fetchFavorites(action) {
  try {
    let response = yield axios.get('/api/favorite')
    yield console.log(response);
    yield put({type: 'SET_FAVS', payload: response.data})
  } catch (error) {
    console.log('error with GET on fetchFavorites', error);
  }
}

//post favorite
function* postFavorite(action) {
  try {
    console.log('in postFavorite', action.payload);
    yield axios.post('/api/favorite', {url: action.payload})
    yield put({
      type: 'FETCH_FAVS'
    })

  } catch(error) {
    console.log('error in POST fav', error);

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

//FAVORITE REDUCER
const favoriteReducer = (state = [], action) => {
  switch (action.type){
    case 'SET_FAVS':
      return action.payload;
    default:
      return state;
  }
}


const store = createStore(
  combineReducers({searchReducer, favoriteReducer}),
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
