import React from 'react';
import { getRandomJoke } from './jokes-collection';
import Joke from '../Joke';
import './Jokes.style.css';

const Jokes = (props) => {
  const [joke, setJoke] = React.useState(getRandomJoke());

  const nextJokeHandler = (e) => {
    setJoke(getRandomJoke());
  };
  return (
    <div className="jokes-wrapper">
      <button className="next-joke-btn" onClick={nextJokeHandler}>
        Next
      </button>
      <Joke joke={joke} />
    </div>
  );
};

export default Jokes;
