import React from 'react';

import './Joke.style.css';

const Joke = ({ joke, nextJokeHandler }) => {
  const [reveal, setReveal] = React.useState(false);

  const revealAnswer = (e) => {
    setReveal(true);
  };

  React.useLayoutEffect(() => {
    setReveal(false);
  }, [joke]);

  return (
    <div className="qa-wrapper">
      <div className="btns-wrapper">
        <button className="next-joke-btn" onClick={nextJokeHandler}>
          Next
        </button>
        <button className="reveal-btn" onClick={revealAnswer}>
          Reveal
        </button>
      </div>
      <div className="question">{joke.q}</div>

      <div className="answer">{reveal ? `Ans: ${joke.a}` : ''}</div>
    </div>
  );
};

export default Joke;
