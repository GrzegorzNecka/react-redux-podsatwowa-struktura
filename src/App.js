import React from 'react';
import './style.css';

export default function App({ state }) {
  console.log(state);
  return (
    <div>
      <p>{JSON.stringify(state)}</p>

      <ul>
        {state.movies.map((item, i) => {
          return <li key={i}> {item}</li>;
        })}
      </ul>
    </div>
  );
}
