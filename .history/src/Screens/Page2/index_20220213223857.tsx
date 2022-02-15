import React,{useState, useEffect} from "react";
import { api } from "../../Services/api";

export default ({router}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
   const router =
    
  useEffect(() =>{ 

    api.get(`/${tipo}/marcas`).then((response)=>{
     setModelo(response.data.nome)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])
  return(
    <></>
  );
}