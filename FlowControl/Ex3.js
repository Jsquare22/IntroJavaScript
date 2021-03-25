function evenOrOdd(num) {
  remainder = num % 2;
  if(!Number.isInteger(num)){
    console.log("Error")
  }
  else if(remainder === 0){
    console.log('even');
  }
  else if(remainder > 0) {
    console.log("odd");
  }
}

evenOrOdd(3);
evenOrOdd(4);
evenOrOdd("stop");