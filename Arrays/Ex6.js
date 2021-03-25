let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let lengthArr = arr.map(function(elements){
  return elements.length;
});
console.log(lengthArr);

let oddLengths = lengthArr.filter(lens => lens % 2 > 0);

console.log(`${oddLengths}`); // => [1, 5, 3]
console.log(oddLengths);

