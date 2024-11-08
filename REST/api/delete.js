async function del(url){
  try{
    const res = await fetch(url,{
      method:'DELETE',
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }      
    });
    if(!res.ok){
      throw new Error(`응답오류:${res.status}`)
    }
    const {header,body,totalcnt} = await res.json();
    console.log(header,body,totalcnt);
    if(header.rtcd == '00'){
      console.log('삭제성공');
    }else if(header.rtcd == '01') {
      console.log('삭제하고자 하는 상품이 없음!')
    }
  }catch(err){
    console.log(err.message);
  }
}
const pid = 262;
const url = `http://localhost:9080/api/products/${pid}`;

del(url);
console.log(1);