function fullName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);  
  return name;
}

let firstName = fullName("What is your first name? ");
let lastName = fullName("What is your last name? ")
console.log(`Welcome, ${firstName} ${lastName}`);