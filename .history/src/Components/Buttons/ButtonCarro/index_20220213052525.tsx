import React, {useEffect, useState} from "react";
im
import { ContainerL, ContainerMarcas } from "./style";
import { api } from "../../../Services/api";


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
 <>
    <ContainerL> 
    {abrir ? marcas.map((marcas, key, )=> {
     
     return (
         <ContainerMarcas
          key={key}>
         {marcas.nome}
         </ContainerMarcas>
        )
      }) : marcas.map((marcas, key, )=> {
     
      return (
         <ContainerMarcas
          key={key}>
         {marcas.nome}
         </ContainerMarcas>
        )
        }).splice(0,7)}
        </ContainerL>

   <VerMais
   onPress={Ver}
   >
   <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
   </VerMais>

   </>
  );

}