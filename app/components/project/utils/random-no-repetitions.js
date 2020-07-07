export default function randomNoRepetitions(min, max, amount) {
  let items = [];
  const result = [];
  for (let i = min; i <= max; i++){
    items.push(i);
  }

  items = shuffle(items);

  for (let i = 0; i < amount; i++){
    result.push(items[i]);
  }
  return result;
}

function shuffle(array) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    /* eslint-disable-next-line no-plusplus */
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
