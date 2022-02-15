import React, {useEffect, useState} from "react";
import { api } from "../../Services/api";
import { DadosAPi } from "../Diversos";
import { ContainerMarcas, LimiteScroll } from "../Containers/style";
import { ContainerL } from "../Diversos";
import { VerMais, TextoVer } from "../Buttons/verMais/style";
interface TesteProps {tipo:string; setSelected:React.Dispatch<React.SetStateAction<string>>; selected:string} 

export default ({tipo, setSelected, selected} : TesteProps) => { 
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

   const sel=(codigo: string nome: string) =>{
    setSelected(codigo);
 }
 
  
    return (
   <>
      <ContainerL> 
        <LimiteScroll>
      {abrir ? marcas.map((marcas, key, )=> {
       
       return (
           <ContainerMarcas 
           onPress={()=> (sel(marcas.codigo))}  
           disabled={  selected  === marcas.codigo ? true : false}
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
          disabled={  selected  === marcas.codigo ? true : false}
          key={key}>
          <DadosAPi>
         {marcas.nome}
         </DadosAPi>
         </ContainerMarcas>
          )
          }).splice(0,3)}
          </LimiteScroll>
          </ContainerL>
  
     <VerMais
     onPress={Ver}
     >
     <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
     </VerMais>
     </>
    );
  
  }
