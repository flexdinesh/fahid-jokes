import React from 'react';

import './Joke.style.css';

const Joke = ({ joke }) => {
  const [reveal, setReveal] = React.useState(false);

  const revealAnswer = (e) => {
    setReveal(true);
  };

  React.useLayoutEffect(() => {
    setReveal(false);
  }, [joke]);

  return (
    <div className="qa-wrapper">
      <div className="question">{joke.q}</div>
      <button className="reveal-btn" onClick={revealAnswer}>
        Reveal
      </button>
      <div className="answer">{reveal ? joke.a : ''}</div>
    </div>
  );
};

export default Joke;
