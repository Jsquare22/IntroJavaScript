let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

let evenArray = myArray.filter(num => num % 2 == 0)

evenArray.forEach(function(index){
  console.log(index);
});