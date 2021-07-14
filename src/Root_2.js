import React from 'react';
import { createStore, combineReducers } from 'redux';
import App from './App';

// -------------------- STATES ------------------------- //

const initialMovies = {
  list: ['Rambo III', 'Hakerzy', 'Matrix']
};

const initialActors = {
  listName: 'Best',
  list: ['Tom Hardy', 'Julia Roberts', 'Angelina Jolie']
};

// -------------------- REDUCER ------------------------- //

//{...state} - {list: ['Rambo III', 'Hakerzy', 'Matrix']}
//state.list - ['Rambo III', 'Hakerzy', 'Matrix']
//action.item - Titanic

function moviesReducer(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        list: [...state.list, action.item]
      };
    case 'RESET_MOVIE':
      return { ...state, list: [] };
    case 'DELETE_MOVIE':
      return {
        ...state,
        list: [...state.list].filter(item => item !== action.item)
      };

    default:
      return state;
  }
}

function actorsReducer(state = initialActors, action) {
  switch (action.type) {
    case 'ADD_ACTOR':
      return {
        ...state,
        list: [...state.list, action.item]
      };
    case 'RESET_ACTORS':
      return { ...state, list: [] };
    default:
      return state;
  }
}
const allReducers = combineReducers({ moviesReducer, actorsReducer });
// -------------------- STORE ------------------------- //

const store = createStore(moviesReducer);
console.log(store);

// -------------------- DISPATCH ------------------------- //

store.dispatch({ type: 'RESET_MOVIE' });
store.dispatch({ type: 'ADD_MOVIE', item: 'Titanic' });
store.dispatch({ type: 'DELETE_MOVIE', item: 'Matrix' });

// ------------------------ ACTION CREATOR -------------------------  //

const addMovie = item => ({ type: 'ADD_MOVIE', item });
store.dispatch(addMovie('Big Lebovski'));

const Root = () => {
  return <App state={store.getState()} />;
};

export default Root;
