import React from 'react';
import { createStore, combineReducers, bindActionCreators } from 'redux';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

// -------------------- STATE ------------------------- //

const initialMovies = {
  listName: ' Best Movies ',
  list: ['Rambo III', 'Hakerzy', 'Matrix']
};

const initialActors = {
  listName: 'Best Actors ',
  list: ['Tom Hardy', 'Julia Roberts', 'Angelina Jolie']
};

// -------------------- REDUCERS ------------------------- //

//{...state} - {movies: ['Rambo III', 'Hakerzy', 'Matrix']}
//state.movies - ['Rambo III', 'Hakerzy', 'Matrix']
//action.movie - Titanic

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
// -------------------- COMBINE REDUCERS ------------------------- //

const allReducers = combineReducers({ moviesReducer, actorsReducer });

// -------------------- STORE ------------------------- //

const store = createStore(allReducers);
console.log(store);

// -------------------- DISPATCH ACTION------------------------- //

store.dispatch({ type: 'RESET_MOVIE' });
store.dispatch({ type: 'ADD_MOVIE', item: 'Titanic' });
store.dispatch({ type: 'DELETE_MOVIE', item: 'Matrix' });

// ----------- DISPATCH WITH ACTION CREATOR -----------  //

const addMovie = item => ({ type: 'ADD_MOVIE', item });
store.dispatch(addMovie('Big Lebovski'));

// ------------------ BIND ACTION CREATORS -------------------------------  //

const addActor = item => ({ type: 'ADD_ACTOR', item });
const resetActors = () => ({ type: 'RESET_ACTORS' });

const actorsActions = bindActionCreators(
  { add: addActor, reset: resetActors },
  store.dispatch
);

actorsActions.reset();
actorsActions.add('Jan Frycz');

// --------------------------------------- //

const Root = () => {
  // return <App state={store.getState()} />;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export { store, Root as default };
