import React,{useState, useEffect} from "react";
import { api } from "../../../Services/api";
import { ContainerL } from "../ButtonCarro/style";
import { ContainerMarcas } from "../ButtonCarro/style";
import { VerMais } from "../verMais/style";
import { TextoVer } from "../verMais/style";
import { DadosAPi } from "../ButtonCarro/style";



export default () =>{
 const [selected, setSelected] = useState('')
  const [abrir, setAbrir] = useState(false); 
  const [marcas, setMarcas ] =  useState([]); 

 useEffect(() =>{
 api.get('/motos/marcas').then((response)=>{
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
           onPress={}   
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