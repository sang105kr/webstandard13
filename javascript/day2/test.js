function f(){
  var a = 10;
  console.log(a);
  // var a;
  console.log(globalThis.a);
  function g(){
    b=20;
    var b;
  }
  g();
  
}
f()
console.log(globalThis.a);
console.log(globalThis.b);