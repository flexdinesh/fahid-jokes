import React from 'react';
import { getRandomJoke } from './jokes-collection';
import Joke from '../Joke';
import './Jokes.style.css';

const Jokes = (props) => {
  const [joke, setJoke] = React.useState(getRandomJoke());

  const nextJokeHandler = (e) => {
    let nextJoke = getRandomJoke();
    while (nextJoke.q === joke.q) {
      nextJoke = getRandomJoke();
    }

    setJoke(nextJoke);
  };

  return (
    <div className="jokes-wrapper">
      <Joke joke={joke} nextJokeHandler={nextJokeHandler} />
    </div>
  );
};

export default Jokes;
