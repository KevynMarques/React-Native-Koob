
import { View, Text } from "react-native";
import { ContainerMarcas } from "../../Components/Buttons/ButtonCarro/Style";
import { DadosAPi } from "../../Components/Buttons/ButtonCarro/Style";
import { useEffect, useState } from "react";
import {api} from '../../Services/api'
import  {ContainerL} from '../../Components/Buttons/ButtonCarro/Style'
interface ApiProps {modelo:string}

export default ({route}: any) =>{
 const {selected, veiculo } =  route.params;
 
 console.log(`/${veiculo}/marcas/${selected}/modelos`, api);
 
 const [modelo, setModelo] = useState([])


  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{
     setModelo(response.data)
     console.log(response)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

  return (
    <ContainerL> 
      {modelo.map((modelo, key, )=> {
       
       return (
           <ContainerMarcas 
            key={key}>
            <DadosAPi>
            {modelo.nome}
           </DadosAPi>
  
           </ContainerMarcas>
          )})}  
           </ContainerL>
  );

}