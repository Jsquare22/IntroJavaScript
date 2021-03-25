let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// What is the output?
// 1 because let is used inside of foo creating a local variable
// the local variable just happens to be the same name as global
