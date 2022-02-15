import React,{useState, useEffect} from "react";
import { View, Text} from "react-native";
import { api } from "../../Services/api";

export default ({route}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
  const {selected, veiculo} = route.params;

  useEffect(() =>{ 

    api.get(`/${tipo}/marcas`).then((response)=>{
     setModelo(response.data.nome)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

  return(
    return (
      <>
         <ContainerL> 
         {abrir ? marcas.map((marcas, key, )=> {
          
          return (
              <ContainerMarcas 
              onPress={()=> (sel(marcas.codigo))}  
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
             </>
  );
}
