const ajax = {
  post : async (url, payload)=>{
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
      const json = await res.json();
      return json;
    }catch(err){
      console.log(err.message);
    }
  },
  get : async url => {
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
      const json = await res.json();
      return json;
    }catch(err){
      console.log(err.message);
    }
  },
  patch : async (url, payload)=>{
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
      const json = await res.json();
      return json;
    }catch(err){
      console.log(err.message);
    }
  },
  delete : async (url, payload)=>{
    let optional = {
      method:'DELETE',
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    };

    if(payload){
      optional = {
        ...optional,      // 스프레드 문법
        body: JSON.stringify(payload) //json포맷 문자열로 변환
      }
    }

    try{
      const res = await fetch(url,optional);
      if(!res.ok){
        throw new Error(`응답오류:${res.status}`)
      }
      const json = await res.json();
      return json;
    }catch(err){
      console.log(err.message);
    }
  },
}

export { ajax };


const data = ajax.post(url);