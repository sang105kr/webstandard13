async function dels(url, payload){
  try{
    const res = await fetch(url,{
      method:'DELETE',
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(payload) //json포맷 문자열로 변환 `{"productIds" : [264,265,266]}`
      
    });
    if(!res.ok){
      throw new Error(`응답오류:${res.status}`)
    }
    const {header,body,totalcnt} = await res.json();
    console.log(header,body,totalcnt);
    if(header.rtcd == '00'){
      console.log(body);
    }
  }catch(err){
    console.log(err.message);
  }
}
const url = 'http://localhost:9080/api/products';
const payload = {
  productIds : [264,265,266]
};

dels(url,payload);
console.log(1);