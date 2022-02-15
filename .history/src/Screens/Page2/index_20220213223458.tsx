import React,{useState, useEffect} from "react";

export default ()=>{
  const [modelo, setModelos ] =  useState([]); 
    
  useEffect(() =>{ 

    api.get(`/${tipo}/marcas`).then((response)=>{
     setMarcas(response.data)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [tipo])
  return(
    <></>
  );
}