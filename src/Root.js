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
      return {
        ...state,
        movies: [...state.movies, action.movie]
      };

    case 'RESET':
      return { ...state, movies: [] };
    default:
      return state;
  }
}

// -------------------- STORE ------------------------- //
const store = createStore(initialReducer);
console.log(store);

// -------------------- DISPATCH ------------------------- //

const Root = () => {
  return <App state={store.getState()} />;
};

export default Root;
