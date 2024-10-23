const arr = [1,2,3];

function f1(arr){
  for(let i=0; i<arr.length; i++){
    console.log(i);
  }
}

function f2(value){
  return 2 * value;
}
function f4(value) {
  return 3 * value;
}

function f3(arr,f4){
  const result=[];
  for (let i = 0; i < arr.length; i++) {
    result.push(f4(arr[i]));
  }
  return result;
}

const result = f3(arr,f4);
console.log(result);
