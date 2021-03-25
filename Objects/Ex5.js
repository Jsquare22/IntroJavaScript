let myProtoObj = {
  foo: 1,
  bar: 2,
};

let name = Object.create(myProtoObj);

console.log(name.foo);