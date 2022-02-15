
import { View, Text } from "react-native";
import { ContainerMarcas } from "../../Components/Buttons/ButtonCarro/Style";
import { DadosAPi } from "../../Components/Buttons/ButtonCarro/Style";
import { useEffect, useState } from "react";
import {api} from '../../Services/api'

interface ApiProps {modelo:string}

export default ({route}: any) =>{
 const {selected, veiculo } =  route.params;


  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{
     setModelo(response.data)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

  return (
    <ContainerMarcas>
       <DadosAPi>
          teste
       </DadosAPi>
    </ContainerMarcas>
  );

}