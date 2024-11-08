async function read(url){
  try{
    const res = await fetch(url,{
      method:'GET',
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
      console.log(body);
    }else if(header.rtcd == '01') {
      console.log(header.rtmsg);
    }
  }catch(err){
    console.log(err.message);
  }
}
const pid = 261;
const url = `http://localhost:9080/api/products/${pid}`;

read(url);
console.log(1);