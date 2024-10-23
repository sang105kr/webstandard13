const resultEle = document.getElementById('result');
const btnsEle = document.querySelector('.btns');

btnsEle.addEventListener('mousedown',evt=>{
  // console.dir(evt.target); // 이벤트 타겟요소 = 이벤트 소스
  // console.log(evt.currentTarget); // 핸들러가 등록된 요소
  // console.log(evt.target.textContent);
  if (evt.target.tagName != 'BUTTON') {
    return;
  }
  evt.target.style.backgroundColor = 'yellow';

  const btnText = evt.target.textContent;
  if (btnText != 'AC' && resultEle.value == 'Error') return;

  switch(btnText){
    case 'AC': // clear
      resultEle.value = '';
      break;
    case '=':  // 계산결과
      if (resultEle.value.length == 0 || resultEle.value == 'Error') {
        return;
      }
      try{
        resultEle.value = eval(resultEle.value);
      }catch(err){
        resultEle.value ='Error';
      }
      break;
    default :  // 그외
      resultEle.value += btnText;
  }
});

btnsEle.addEventListener('mouseup',evt=>{
  evt.target.style.backgroundColor = '';
});