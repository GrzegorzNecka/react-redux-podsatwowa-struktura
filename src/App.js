import React from 'react';
import { connect } from 'react-redux';
import './style.css';

export function App({ movies, moviesTitle, actors, actorsTitle }) {
  console.log(movies, actors);
  return (
    <div>
      <p> {moviesTitle} </p>
      {
        <ul>
          {movies.map((item, i) => {
            return <li key={i}> {item}</li>;
          })}
        </ul>
      }
      <p> {actorsTitle} </p>
      {
        <ul>
          {actors.map((item, i) => {
            return <li key={i}> {item}</li>;
          })}
        </ul>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  moviesTitle: state.moviesReducer.listName,
  movies: state.moviesReducer.list,
  actorsTitle: state.actorsReducer.listName,
  actors: state.actorsReducer.list
});

export default connect(
  mapStateToProps,
  {}
)(App);
