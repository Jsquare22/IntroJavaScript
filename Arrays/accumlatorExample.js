let arr = [2, 3, 5, 7]
console.log(arr.reduce((accumulator, element) => accumulator + element, 0));
//= 17

console.log(arr.reduce((accumulator, element) => accumulator * element, 1));
// 210