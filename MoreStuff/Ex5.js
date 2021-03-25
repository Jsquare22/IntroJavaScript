function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething("At Least"));


/*
Output: First it splits the spring into [At,Least]
then reverses it [Least,At]
Maps the array to their lengths
[5,2]

*/