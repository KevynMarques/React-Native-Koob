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

  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos/${selectedP2}/anos/${selectedP3}`).then((response)=>{
     setDados(response.data)
     console.log(response.data)
     
    }).catch(()=>{ 
     console.log('Erro api anos')
    })
    }, []) 
 
    return (
     <ScrollView>
       <Sequencia> testando </Sequencia>
       <Description>Dados do Veiculo</Description>
       
         <ContainerP2> 
         {dados.map(( key, )=> {
          
          return (
              <ContainerMarcas
               key={key}>
               <DadosAPi>
              </DadosAPi>
              </ContainerMarcas>
             )
           })}
             </ContainerP2>
     

      <ProximoP2 
       onPress={()=> navigation.navigate('Home')}
      >
     <TextProximoP2>Voltar ao inicio</TextProximoP2>
         </ProximoP2>
        </ScrollView>
       );
     
       
}
