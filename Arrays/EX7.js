let array = [3, 5, 7];

function sumOfSquares(arr){
  squares = arr.reduce(function(accum,value){
    console.log("Accum is " + accum);
    squares = accum + (value**2);
    console.log("Squares = " + squares);
    return squares;
  },0);
  return squares;
}

console.log(sumOfSquares(array)); // => 83