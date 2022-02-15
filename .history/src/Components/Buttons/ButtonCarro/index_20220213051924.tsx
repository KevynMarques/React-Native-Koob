import React, {useEffect, useState} from "react";


export default () =>{
 
  const [abrir, setAbrir] = useState(false); 
  const [marcas, setMarcas ] =  useState([]); 

 useEffect(() =>{
 api.get('/carros/marcas').then((response)=>{
  setMarcas(response.data)
 }).catch(()=>{ 
  console.log('Erro api')
 })
 }, [])


 const Ver =() => {
   setAbrir(!abrir);
 }
 

  return (


  );

}