export const jokes = [{ q: 'What do you call a sad coffee?', a: 'Depresso' }, { q: 'Need more jokes', a: '¯_(ツ)_/¯' }];

export const getRandomJoke = () => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  return randomJoke;
};
