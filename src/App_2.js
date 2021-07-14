import React from 'react';
import './style.css';

export default function App({ state }) {
  console.log(state);
  return (
    <div>
      {/* <p>{JSON.stringify(state)}</p> */}

      <p>{state.moviesReducer.listName}</p>

      {
        <ul>
          {state.moviesReducer.list.map((item, i) => {
            return <li key={i}> {item}</li>;
          })}
        </ul>
      }

      <p>{state.actorsReducer.listName}</p>

      {
        <ul>
          {state.actorsReducer.list.map((item, i) => {
            return <li key={i}> {item}</li>;
          })}
        </ul>
      }
    </div>
  );
}
