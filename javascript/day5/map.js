{
  const arr = [1,2,3];
  const arr2 = arr.map(ele => ele * 2);
  console.log(arr2);
}
{
  const arr = [
    {name:'홍길동1',age:10,blood:'A',height:160, weight:60, gender:'남'},
    {name:'홍길동2',age:20,blood:'A',height:170, weight:70, gender:'여'},
    {name:'홍길동3',age:30,blood:'B',height:180, weight:80, gender:'남'},
    {name:'홍길동4',age:40,blood:'O',height:190, weight:90, gender:'여'}
  ];

  /* forEach - 반환값 : 없음 */
  arr.forEach(ele=>console.log(ele));
  arr.forEach(console.log);

  /* map - 반환값:배열 */
  const result = arr.map(person => person.name);
  console.log(result); // ['홍길동1','홍길동2','홍길동3','홍길동4']

  /* filter - 반환값:배열 */
  const result2 = arr.filter(person=>person.gender == '남')
  console.log(result2);

  /* find - 반환값:처음에 일치하는 배열의 요소 */
  const result3 = arr.find(person=>person.gender == '남');
  console.log(result3);
  
  /* findIndex - 반환값:처음에 일치하는 배열의 요소의 index */
  const result4 = arr.findIndex(person=>person.gender == '남');
  console.log(result4);  

  /* some - 반환값:논리값(true,false) */
  const result5 = arr.some(person=>person.gender == '남');
  console.log(result5);

  /* every - 반환값:논리값(true,false) */
  const result6 = arr.every(person=>person.gender == '남');
  console.log(result6);  
}
