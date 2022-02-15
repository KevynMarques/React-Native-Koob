import React,{useState, useEffect} from "react";
import { View, Text} from "react-native";
import { api } from "../../Services/api";
import { ContainerL, ContainerMarcas } from "../../Components/Diversos";
import { DadosAPi } from "../../Components/Diversos";

export default ({route, nome}: any,)=>{
  const [modelo, setModelo ] =  useState([]); 
  const {selected, veiculo} = route.params;

  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

    return (
      <>
         <ContainerL> 
         {modelo.map((modelo, key, )=> {
          
          return (
              <ContainerMarcas 
              key={key}>
              <DadosAPi>
              {modelo.nome}
              </DadosAPi>
              </ContainerMarcas>
             )
           })}
             </ContainerL>
        </>
       );
}
