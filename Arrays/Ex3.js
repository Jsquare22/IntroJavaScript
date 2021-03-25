let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for(let index = 0; index <= myArray.length - 1; index++){
  for(let index2 = 0; index2 <= myArray[index].length - 1; index2 ++){
    if(myArray[index][index2] % 2 === 0){
      console.log(myArray[index][index2]);
    }
    //console.log("NestedArray");
  }
  //console.log("firstArray");
}