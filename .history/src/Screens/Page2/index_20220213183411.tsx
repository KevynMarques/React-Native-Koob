
import { View, Text } from "react-native";
import { ContainerMarcas } from "../../Components/Buttons/ButtonCarro/Style";
import { DadosAPi } from "../../Components/Buttons/ButtonCarro/Style";
import { useEffect, useState } from "react";
import {api} from '../../Services/api'

interface ApiProps {modelo:string}

export default ({route}: any) =>{
 

  useEffect(() =>{ 

    api.get(`/${modelo}/marcas`).then((response)=>{
     setModelo(response.data)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [modelo])

  return (
    <ContainerMarcas>
       <DadosAPi>
          teste
       </DadosAPi>
    </ContainerMarcas>
  );

}