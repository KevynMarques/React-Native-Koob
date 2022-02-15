import React, {useEffect, useState} from "react";
import { api } from "../../Services/api";
import { DadosAPi } from "../Diversos";
import { ContainerMarcas } from "../Containers/style";
import { ContainerL } from "../Diversos";
import { VerMais, TextoVer } from "../Buttons/verMais/style";
interface TesteProps {tipo:string; setSelected:React.Dispatch<React.SetStateAction<string>>;}

export default ({tipo, setSelected} : TesteProps) => { 
    const [abrir, setAbrir] = useState(false); 
    const [marcas, setMarcas ] =  useState([]); 
  
   useEffect(() =>{ 
   api.get(`/${tipo}/marcas`).then((response)=>{
    setMarcas(response.data)
   }).catch(()=>{ 
    console.log('Erro api')
   })
   }, [tipo])
  
   const Ver =() => { 
     setAbrir(!abrir);
   }

   const sel=(nome : string ) =>{
    setSelected(nome);
 }
 
  
    return (
   <>
      <ContainerL> 
      {abrir ? marcas.map((marcas, key, )=> {
       
       return (
           <ContainerMarcas 
           onPress={()=> (sel(marcas.nome))}  
            key={key}>
            <DadosAPi>
           {marcas.nome}
           </DadosAPi>
  
           </ContainerMarcas>
          )
        }) : marcas.map((marcas, key, )=> {
       
        return (
          <ContainerMarcas
          onPress={()=> (sel(marcas.codigo))}  
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
