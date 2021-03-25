let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Snippet 1: What does it do?
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
  
});
console.log("snip1")

// Snippet 2: What does it do? Same as 1?
for (let key in myObj) {
  console.log(key);

}
console.log("snip2")