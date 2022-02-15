
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import {api} from '../../Services/api'
import { ContainerL } from "../../Components/Buttons/ButtonCarros/Style";
import { ContainerMarcas } from "../../Components/Buttons/ButtonCarros/Style";
import {DadosAPi} from '../../Components/Buttons/ButtonCarros/Style'
interface ApiProps {modelo:string}

export default ({route}: any) =>{
 const {selected, veiculo } =  route.params;
 
 console.log(`/${veiculo}/marcas/${selected}/modelos`, api);

 const [modelo, setModelo] = useState([])


  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{

      console.log(response)
     setModelo(response.data.modelos)
  
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