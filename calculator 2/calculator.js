const btnsEle = document.querySelectorAll('button');
// console.log(btnsEle);

for (let i=0; i<btnsEle.length; i++) {
  console.log(btnsEle[i].textContent);
}

for(let ele of btnsEle){
  console.log(ele.textContent)
}

Array.from(btnsEle).forEach( ele => {
  //console.log(ele);
  console.log(ele.textContent)
});

Array.from(document.querySelectorAll('button')).forEach(ele => {
  //console.log(ele);
  console.log(ele.textContent);
});

Array.from(btnsEle).forEach( ({textContent:txt}) => {
  //console.log(ele);
  console.log(txt);
});