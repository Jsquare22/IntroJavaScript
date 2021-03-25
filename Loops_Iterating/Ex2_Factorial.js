function factorial(num){
  let product = 1;
  for(let count = 1; count <= num; count += 1){
    product = count * product;
  }
  console.log(product);
}
factorial(1);
factorial(2);
factorial(3);