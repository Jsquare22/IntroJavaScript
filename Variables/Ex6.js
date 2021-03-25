const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// What is the output?
// Error. Constants are globals so the second FOO will throw out an error
// due to trying to mutate a constant

// Incorrect - ACTUAL ANSWER
// Constants still are different variables due to being in
// different scopes so they dont collide with one another