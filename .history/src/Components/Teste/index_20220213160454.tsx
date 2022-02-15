import React, {useEffect, useState} from "react";
import { api } from "../../Services/api";
import { ContainerMarcas } from "../Buttons/ButtonCarro/style";
import { DadosAPi } from "../Buttons/ButtonCarro/style";
import { ContainerL } from "../Buttons/ButtonCarro/style";
import { VerMais, TextoVer } from "../Buttons/verMais/style";


export default ({tipo : string}) => { 
    const [abrir, setAbrir] = useState(false); 
    const [marcas, setMarcas ] =  useState([]); 
  
   useEffect(() =>{
   api.get(`/${tipo}/marcas`).then((response)=>{
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
            <DadosAPi>
           {marcas.nome}
           </DadosAPi>
  
           </ContainerMarcas>
          )
        }) : marcas.map((marcas, key, )=> {
       
        return (
          <ContainerMarcas
          key={key}>
          <DadosAPi>
         {marcas.nome}
         </DadosAPi>
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

} 