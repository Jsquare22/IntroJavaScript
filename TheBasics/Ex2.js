let num = 4936;
let ones = num % 10
console.log("ones place is " + ones);

let tensPlace = num % 100 - 6;
console.log("tensPlace is " + tensPlace);

let hundredsPlace = num % 1000 - tensPlace - ones ;
console.log("HundredsPlaces is " + hundredsPlace);

let thousandsPlace = num % 10000 - hundredsPlace - tensPlace - ones
console.log("ThousandsPlace is " + thousandsPlace);
