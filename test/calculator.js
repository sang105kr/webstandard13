const btnEle = document.querySelector('button');
//case1) 함수선언문
// function h_click(evt){
//   console.log(evt);
//   console.log(evt.target); '이벤트 타겟'
//   console.log(btnEle)
//   console.log(evt.currentTarget); '핸들러가 등록된 요소'
// }

//case2) 함수표현식
// const h_click = function(evt){
//   console.log(evt);
//   console.log(evt.target); '이벤트 타겟'
//   console.log(btnEle)
//   console.log(evt.currentTarget); '핸들러가 등록된 요소'
// }

//case3) 화살표함수
const h_click = evt => {
  console.log(evt);
  console.log(evt.target); //'이벤트 타겟';
  console.log(btnEle);
  console.log(evt.currentTarget); //'핸들러가 등록된 요소';
  // evt.target.style.backgroundColor = 'yellow';
  
};

const h_mousedown = evt => {
  evt.target.style.backgroundColor = 'blue';
}
const h_mouseup = evt => {
  evt.target.style.backgroundColor = 'rgb(240, 240, 240)';
}
// const h_mouseenter = evt => {
//   evt.target.style.backgroundColor = 'violet';
// };
// const h_mouseleave = evt => {
//   evt.target.style.backgroundColor = 'pink';
// };

// btnEle.addEventListener('click', h_click, false);
btnEle.addEventListener('mousedown', h_mousedown, false);
btnEle.addEventListener('mouseup', h_mouseup, false);
// btnEle.addEventListener('mouseenter', h_mouseenter, false);
// btnEle.addEventListener('mouseleave', h_mouseleave, false);