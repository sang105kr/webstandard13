const arr = [
  {name:'홍길동1',age:10,blood:'A',height:160, weight:60, gender:'남'},
  {name:'홍길동2',age:20,blood:'A',height:170, weight:70, gender:'여'},
  {name:'홍길동3',age:30,blood:'B',height:180, weight:80, gender:'남'},
  {name:'홍길동4',age:40,blood:'O',height:190, weight:90, gender:'여'}
];
//배열의 고차함수를 이용하여 코드를 구현하시오

{//문1) 평균나이를 구하시오.
  {//case1)
   const avgOfAge = arr.reduce((sum,person)=>sum += person.age,0) / arr.length;
   console.log(`나이 : ${avgOfAge}`);
  }
}
{//문2) 남성과 여성의 수를 구하시오.
  {//case1)
    const cntOfMen = arr.filter(person => person.gender=='남');
    const cntOfWemen = arr.filter(person => person.gender=='여');
    console.log(`남성:${cntOfMen.length}, 여성:${cntOfWemen.length}`);
  }
  {//case2)
    const count = arr.reduce((count,person)=>{
      count[person.gender] = (count[person.gender] || 0) + 1;
      return count;
    },{});
    console.log(count);
    console.log(`남성:${count['남']}, 여성:${count['여']}`);
  }
  {//case3)
    const count = arr.map(person => ({name:person.name, gender:person.gender}))
                     .reduce((count,person)=>{
                        count[person.gender] = (count[person.gender] || 0) + 1;
                        return count;
                      },{});
    console.log(count);
    console.log(`남성:${count['남']}, 여성:${count['여']}`);
  }  
}
{//문3) 이름과,나이를 요소(객체리터럴)로 갖는 배열로 변환하시오.
  const result = arr.map(person=> ({name:person.name, age:person.age}));
  console.log(result);                    
}
{//문4) 몸무게가 가장 많은 사람의 키는?
  const maxWeightPerson = arr.reduce((max,person)=> max.weight < person.weight ? person : max ,arr[0]);
  console.log(`몸무게가 가장 많은 사람의 키 : ${maxWeightPerson.height}`);
}