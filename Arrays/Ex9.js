let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function found(arr){
  let inside = arr.find(element => element == 3);
  if (inside > 0){
    return true
  }
  else{
    return false;
  }
}

console.log(found(numbers1));
console.log(found(numbers2));
console.log(found(numbers3));

// Note: This works but you can shorten by using includes. 
// I was looking for contain but its not a method