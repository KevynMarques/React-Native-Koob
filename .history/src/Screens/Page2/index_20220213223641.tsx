import React,{useState, useEffect} from "react";
import { api } from "../../Services/api";

export default ({router}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
    
  useEffect(() =>{ 

    api.get(`/${tipo}/marcas`).then((response)=>{
     setModelo(response.data.name)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])
  return(
    <></>
  );
}