function fibonacci(number){
  let total = 0
  if (number === 0){
    console.log("total = zero" );
    return 0;
  }
  else if (number === 1) {
    console.log("total = 1" );
    return 1;
  }
  else{
    
    total = fibonacci(number - 1) + fibonacci(number - 2 );
    console.log("total = " + total);
    console.log("num = " + number);
  }  
  return total;
  
}


//console.log(fibonacci(0)) //= 0
//console.log(fibonacci(1))  //= 1
//console.log(fibonacci(2)) //= fibonacci(1) + fibonacci(0) = 1 + 0 = 1
//console.log(fibonacci(3))  //= fibonacci(2) + fibonacci(1) = 1 + 1 = 2
console.log(fibonacci(4))  //= fibonacci(3) + fibonacci(2) = 2 + 1 = 3
//console.log(fibonacci(5))  //= fibonacci(4) + fibonacci(3) = 3 + 2 = 5
//console.log(fibonacci(6)) //= fibonacci(5) + fibonacci(4) = 5 + 3 = 8
//console.log(fibonacci(7))  //= fibonacci(6) + fibonacci(5) = 8 + 5 = 13