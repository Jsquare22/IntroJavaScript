function isArrayEmpty(arr) {
  if (arr[0]) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// Output: Empty. Empty array will be true because the array itself is true.
// The first index of the array will print out Empty