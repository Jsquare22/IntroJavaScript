let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
console.log(objKeys);
let upObj = [];
let count = 0;
while(count < objKeys.length){
  upObj[count] = objKeys[count].toUpperCase();
  count += 1;
}
console.log(upObj);