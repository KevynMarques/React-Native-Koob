import React, {useEffect, useState}from "react";
import { api } from "../../Services/api";
import { ScrollView } from "react-native";
import { Sequencia} from "../../Components/Text&Title/style";
import { DadosAPi, Description } from "../../Components/Diversos";
import { ContainerMarcas, ContainerP2 } from "../../Components/Containers/style";
import { ProximoP2, TextProximoP2 } from "../../Components/Buttons/ButtonProximo/style";


export default ({route, navigation}: any)=>{

  const {selected, veiculo, selectedP2, selectedP3} = route.params;
  const [dados, setDados] = useState ([])
  const [selectedP4, setSelectedP4] = useState('')

  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos/${selectedP2}/anos/${selectedP3}`).then((response)=>{
     setDados(response.data)
     console.log(response.data)
     
     
    }).catch(()=>{ 
     console.log('Erro api anos')
    })
    }, [selectedP4]) 

    const sel=(codigo : string ) =>{
      setSelectedP4(codigo);
   }

 
    return (
     <ScrollView>
       <Sequencia> testando </Sequencia>
       <Description>Selecione o ano do veiculo</Description>
       
         <ContainerP2> 
         {dados.map((dados, key, )=> {
          
          return (
              <ContainerMarcas
              onPress={()=> (sel(dados.codigo))} 
               key={key}>
               <DadosAPi>
              {dados}
              </DadosAPi>
              </ContainerMarcas>
             )
           })}
             </ContainerP2>
     

      <ProximoP2 
       onPress={()=> navigation.navigate('Page4', {selected, veiculo, selectedP2})}
      >
     <TextProximoP2>Voltar ao inicio</TextProximoP2>
         </ProximoP2>
        </ScrollView>
       );
     
       
}
