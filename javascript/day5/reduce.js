// const arr = [
//   {name:'홍길동1',age:10,blood:'A',height:160, weight:60, gender:'남'},
//   {name:'홍길동2',age:20,blood:'A',height:170, weight:70, gender:'여'},
//   {name:'홍길동3',age:30,blood:'B',height:180, weight:80, gender:'남'},
//   {name:'홍길동4',age:40,blood:'O',height:190, weight:90, gender:'여'}
// ];
{
   /* reduce-반환값:단일값, 용도 - 모든요소를 순회하면서 누적된 단일값으로 */
  const arr = [1,2,3,4,5];
  const result = arr.reduce((acc,ele,idx,arr)=>{
    console.log(acc,ele,idx,arr);
    return acc += ele;
  });
  console.log(result);
  console.log('--');
  const result2 = arr.reduce((acc,ele,idx,arr)=>{
    console.log(acc,ele,idx,arr);
    return acc += ele;
  },10);
  console.log(result2);
}
{ //배열의 합계
  const arr = [1,2,3,4,5];
  const result = arr.reduce((acc,ele)=> acc += ele);
  console.log(result);
  console.log('--');
  const result2 = arr.reduce((acc,ele)=>acc += ele,10);
  console.log(result2);
}
{ //최대값
  const arr = [1,2,3,4,5];
  const result = arr.reduce((acc,ele)=> {
    if(acc < ele) {
      acc = ele;
    }
    return acc;
  });
  console.log(result);
  console.log('--');
  //최소값
  const result2 = arr.reduce((acc,ele)=>{
    if(acc > ele) {
      acc = ele;
    }
    return acc;
  });
  console.log(result2);
}
{ //최대값
  const arr = [1,2,3,4,5];
  const result = arr.reduce((acc,ele)=> (acc < ele) ? ele:acc );
  console.log(result);
  console.log('--');
  //최소값
  const result2 = arr.reduce((acc,ele)=> (acc > ele) ? ele : acc);
  console.log(result2);
}