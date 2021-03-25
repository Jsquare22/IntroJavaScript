let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// what does it output?
// 'bar' due to second foo being in a different block