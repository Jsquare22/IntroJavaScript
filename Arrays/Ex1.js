let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

// length 1: 4 - number of elements
// length 2: 5 - fills in the rest with undefined
// length 3: 0 - No negative numbers
// length 4: 3 - When length is shorter, array cuts the excess
// length 5: 101 - Fills in the rest and index is 100 so length is 100 + 1 