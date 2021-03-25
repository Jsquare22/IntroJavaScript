let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(word, match){
  matchingWords =[];
  word.forEach(function(element) {
    if (match.test(element)){
      matchingWords.push(element);
    }
  });
  return matchingWords;
}


console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']