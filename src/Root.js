import React from 'react';
import { createStore } from 'redux';
import App from './App';

// -------------------- STATE ------------------------- //
const initialMovies = {
  movies: ['Rambo III', 'Hakerzy', 'Matrix']
};
// -------------------- REDUCER ------------------------- //
function initialReducer(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD':
      //{...state} - {movies: ['Rambo III', 'Hakerzy', 'Matrix']}
      //state.movies - ['Rambo III', 'Hakerzy', 'Matrix']
      //action.movie - Titanic

      return {
        ...state,
        movies: [...state.movies, action.movie]
      };

    case 'RESET':
      return { ...state, movies: [] };

    case 'DELETE':
      return {
        ...state,
        movies: [...state.movies].filter(movie => movie !== action.movie)
      };

    default:
      return state;
  }
}

// -------------------- STORE ------------------------- //
const store = createStore(initialReducer);
console.log(store);

// -------------------- DISPATCH ------------------------- //
// store.dispatch({ type: 'RESET' });
store.dispatch({ type: 'ADD', movie: 'Titanic' });
store.dispatch({ type: 'DELETE', movie: 'Matrix' });

// ------------------------  ---------------------------- //

const Root = () => {
  return <App state={store.getState()} />;
};

export default Root;
