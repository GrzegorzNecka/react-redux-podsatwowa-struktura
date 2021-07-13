import React from "react";
import { createStore } from "redux";
import App from "./App";

const initialMovies = {
  movies: ["Rambo III", "Hakerzy", "Matrix"]
};

function moviesReducer(state = initialMovies, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(moviesReducer);

window.store = store;

const Root = () => {
  return <App />;
};

export default Root;
