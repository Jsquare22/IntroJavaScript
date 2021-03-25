function factorial(num){
  let product;
  if (num === 1){
    return num;
  }
  product = num * factorial(num-1)
  return product
}
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)) // 24