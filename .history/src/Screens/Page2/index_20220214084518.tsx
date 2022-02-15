import React,{useState, useEffect} from "react";
import { View, Text} from "react-native";
import { api } from "../../Services/api";
import { ContainerL, ContainerMarcas } from "../../Components/Diversos";
import { DadosAPi } from "../../Components/Diversos";

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


    const Ver =() => { 
      setAbrir(!abrir);
    }

    return (
      <>
         <ContainerL> 
         {abrir ? modelo.map((marcas, key, )=> {
          
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
