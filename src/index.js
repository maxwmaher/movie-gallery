import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('FETCH_MOVIE_TITLE_DETAILS', fetchMovieTitleDetails)
    yield takeEvery('FETCH_MOVIE_GENRE_DETAILS', fetchMovieGenreDetails)
    yield takeEvery('UPDATE_MOVIE', updateMovie)
}

function* fetchMovies(action) {
    try {
        let movieResponse = yield axios.get('/movies')
        console.log('saga response!', movieResponse.data);
        yield put({
            type: 'SET_MOVIES',
            payload: movieResponse.data
        })
    } catch (err) {
        console.log('error in MOVIE GET:', err);
    }
}

function* fetchMovieTitleDetails(action) {
    try {
        let movieTitleDetailResponse = yield axios.get(`/movies/title/${action.payload}`)
        console.log('the movie title details!', movieTitleDetailResponse.data);
        yield put({
            type: 'SET_MOVIE_TITLE_DETAILS',
            payload: movieTitleDetailResponse.data[0]
        })
    } catch (err) {
        console.log('error in MOVIE TITLE DETAIL GET:', err);
    }
}

function* fetchMovieGenreDetails(action) {
    try {
        let movieGenreDetailResponse = yield axios.get(`/movies/genres/${action.payload}`)
        console.log('the movie genre details!', movieGenreDetailResponse.data);
        yield put({
            type: 'SET_MOVIE_GENRE_DETAILS',
            payload: movieGenreDetailResponse.data
        })
    } catch (err) {
        console.log('error in MOVIE GENRE DETAIL GET:', err);
    }
}

function* updateMovie(action) {
    try {
        yield axios.put(`/movies`, action.payload)
        yield put ({
            type: 'SET_MOVIE_TITLE_DETAILS',
            payload: action.payload
        })
    } catch (err) {
        console.log('error in MOVIE UPDATE:', err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const movieTitleDetails = (state = '', action) => {
    switch (action.type) {
        case 'SET_MOVIE_TITLE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

const movieGenreDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_GENRE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieTitleDetails,
        movieGenreDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
