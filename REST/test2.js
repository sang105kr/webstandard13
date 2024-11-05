async function findByid(pid){
  const url = `http://localhost:9080/api/products/${pid}`
  try{
    const res = await fetch(url,{
        method:'GET',
      }
    );
    if(!res.ok){
      throw new Error(`응답오류:${res.status}`);
    }

    const json = await res.json(); // jonson포맷 문자열 => js 객체로 변환
    console.log(json);
    console.log(json.productId);
    console.log(json.pname);
    console.log(json.quantity);
    console.log(json.price);
  }catch(err){
    console.error(err.msesage);
  }
}
findByid(164);
console.log('hi');

async function findAll(){
  const url = `http://localhost:9080/api/products/all`
  try{
    const res = await fetch(url,{
        method:'GET',
      }
    );
    if(!res.ok){
      throw new Error(`응답오류:${res.status}`);
    }

    const json = await res.json(); // jonson포맷 문자열 => js 객체로 변환
    console.log(json);
  }catch(err){
    console.error(err.msesage);
  }
}
findAll();
console.log('123');
