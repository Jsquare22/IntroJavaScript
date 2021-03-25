let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

// No, this will not given an error. It will output undefined
// due to being out of bounds
// Note: Java will output undefined if the index value
// has no corresponding element