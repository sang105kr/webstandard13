async function update(url, payload){
  try{
    const res = await fetch(url,{
      method:'PATCH',
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
      console.log(body.productId,body.pname,body.price,body.quantity);
    }if(header.rtcd == '01'){
      console.log(header.rtmsg);
    }
  }catch(err){
    console.log(err.message);
  }
}
const pid = 261;
const url = `http://localhost:9080/api/products/${pid}`;
const payload = {
  "pname": "책상",
  "quantity": "10",
  "price": "1000000"
};

update(url,payload);
console.log(1);