import React,{useState, useEffect} from "react";
import { } from "react-native";
import { api } from "../../Services/api";
import {  ContainerMarcas } from "../../Components/Diversos";
import { ContainerP2 } from "../../Components/Containers/style";
import { VerMais } from "../../Components/Buttons/verMais/style";
import { DadosAPi } from "../../Components/Diversos";
import { TextoVer } from "../../Components/Buttons/verMais/style";
import { Sequencia } from "../../Components/Text&Title/style";

export default ({route}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
  const {selected, veiculo} = route.params;


  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

   const [abrir, setAbrir] = useState(false); 
    const Ver =() => { 
      setAbrir(!abrir);
    }

    return (
      <>
         <ContainerP2> 
           <Sequencia>Veiculos Carros</Sequencia>
         {abrir ? modelo.map((modelo, key, )=> {
          
          return (
              <ContainerMarcas 
               key={key}>
               <DadosAPi>
              {modelo.nome}
              </DadosAPi>
     
              </ContainerMarcas>
             )
           }) : modelo.map((modelo, key, )=> {
          
           return (
             <ContainerMarcas
             key={key}>
             <DadosAPi>
            {modelo.nome}
            </DadosAPi>
            </ContainerMarcas>
             )
             }).splice(0,3)}
             </ContainerP2>
     
        <VerMais
        onPress={Ver}
        >
        <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
        </VerMais>
        </>
       );
     
       
}
