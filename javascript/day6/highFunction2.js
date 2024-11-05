const arr = [
  {name:'홍길동1',age:10,blood:'A',height:160, weight:60, gender:'남'},
  {name:'홍길동2',age:20,blood:'A',height:170, weight:70, gender:'여'},
  {name:'홍길동3',age:30,blood:'B',height:180, weight:80, gender:'남'},
  {name:'홍길동4',age:40,blood:'O',height:190, weight:90, gender:'여'}
];

{//문1) 여성 키의 평균을 구하시오
  const result = arr.filter(person=>person.gender == '여');
  const sum = result.reduce((acc,person)=> acc += person.height,0);
  console.log(sum/result.length);     
}
{//문2) 남성중 키가 제일큰 사람의 이름은?
  const result = arr.filter(person=>person.gender == '남');
  const maxHeightPerson = result.reduce((acc,ele)=>(acc.height < ele.height) ? ele : acc,result[0]);
  console.log(maxHeightPerson.name)                    
}
{//문3) 여성이 포함되어 있는가?
  const result = arr.some(ele=>ele.gender=='여');
  console.log(result);
}
{//문4) 남성의 이름만 배열의 요소로 추출하기
  const result = arr.filter(person=>person.gender == '남')
                    .map(ele=>ele.name);
  console.log(result);                    
}
{//문5) 모든 여성은 키가 160 이상이다? 참이면 '그렇다', 거짓이면 '아니다' 출력
  const result = arr.filter(ele=>ele.gender=='여')
                    .every(ele=>ele.height >= 160);
  const result2 =  (result) ? '그렇다' : '아니다';                    
  console.log(result2);
}