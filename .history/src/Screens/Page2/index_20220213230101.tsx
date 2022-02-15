import React,{useState, useEffect} from "react";
import { View, Text} from "react-native";
import { api } from "../../Services/api";
import { ContainerL, ContainerMarcas } from "../../Components/Diversos";
import { DadosAPi } from "../../Components/Diversos";

export default ({route}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
  const {selected, veiculo} = route.params;

  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas${selected}/modelo`).then((response)=>{
     setModelo(response.data.nome)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

    return (
      <>
         <ContainerL> 
         {modelo.map((marcas, key, )=> {
          
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
