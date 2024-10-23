/* 고차 함수 : 매개값이 함수 or 반환값이 함수*/
{
  const arr = [1, 2, 3];
  for(let i=0; i<arr.length; i++){
    console.log(arr[i],i,arr);
  }
}
console.log('--');
{
  const arr = [1, 2, 3];
  let i=0;
  for (const ele of arr) {
    console.log(ele, i++, arr);
  }
}
console.log('--');
{
  const arr = [1, 2, 3];
  arr.forEach(function(ele, idx, arr) {
    console.log(ele, idx, arr);
  });
}  
console.log('--');
{
  const arr = [1, 2, 3];
  arr.forEach((ele)=>{
    console.log(ele);
  });
}  
console.log('--');
{
  const arr = [1,2,3];
  function f(ele,idx,arr){
   console.log(ele,idx,arr);
  }  
  arr.forEach(f);
}  