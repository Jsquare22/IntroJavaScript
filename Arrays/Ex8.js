let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(ar){
  
  let odds = ar.reduce(function(accum,value){
    if(value.length % 2 > 0){
      console.log("Value is = " + value);
      accum.push(value.length);
    } 
    return accum
  },[]);
  return odds;
}

console.log(oddLengths(arr)); // => [1, 5, 3]