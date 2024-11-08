const add = async (url, payload)=>{
  try{
    const res = await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(payload) //json포맷 문자열로 변환
    });
    if(!res.ok){
      throw new Error(`응답오류:${res.status}`)
    }
    const {header,body,totalcnt} = await res.json();
    console.log(header,body,totalcnt);
    if(header.rtcd == '00'){
      console.log(`생성된 상품번호 : ${body.productId}`);
    }
  }catch(err){
    console.log(err.message);
  }
}
const url = 'http://localhost:9080/api/products';
const payload = {
  "pname": "의자",
  "quantity": "10",
  "price": "100"
};

add(url,payload);
console.log(1);