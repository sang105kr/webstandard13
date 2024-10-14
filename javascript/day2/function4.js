/*
배열의 평균값

문제: 주어진 숫자 배열의 평균값을 계산하여 반환하는 함수를 작성하세요.
요구 사항:
일반 함수로 작성하세요.
같은 기능을 하는 함수 표현식으로 변환하세요.
같은 기능을 하는 화살표 함수로 변환하세요.
*/
{ /* 일반함수 */
  function avg(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
      // sum = sum + arr[i];
      sum += arr[i];
    }
    const avg = sum / arr.length;
    // console.log(`sum=${sum}`);
    // console.log(`avg=${avg}`);
    return avg;
  }
  const arr = [1,2,3,4,5];
  const result = avg(arr);
  console.log(`평균=${result}`);
}
{
  /* 함수 표현식 */
  const avg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const avg = sum / arr.length;
    return avg;
  }
  console.log(`평균=${avg([1,2,3,4,5])}`);
}
{
  /* 화살표 함수 */
  const avg = arr => { /* 매개변수가 1개인경우 () 생략가능 */
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const avg = sum / arr.length;
    return avg;
  };
  console.log(`평균=${avg([1, 2, 3, 4, 5])}`);
}
