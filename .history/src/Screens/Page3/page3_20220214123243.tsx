import React, {useEffect, useState}from "react";
import { api } from "../../Services/api";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import { Sequencia} from "../../Components/Text&Title/style";
import { Description } from "../../Components/Diversos";
import { ContainerP2 } from "../../Components/Containers/style";



export default ({route, navigation}: any)=>{

  const {selected, veiculo, selectedP2} = route.params;
  const [ano, setAno] = useState ('')

  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{
     setAno(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

    const sel=(codigo : string ) =>{
      setAno(codigo);
   }

 
    return (
     <ScrollView>
       <Sequencia> testando </Sequencia>
       <Description>Selecione o modelo do veiculo</Description>
         <ContainerP2> 
         {ano.map((ano, key, )=> {
          
          return (
              <ContainerMarcas
              onPress={()=> (sel(ano.codigo))} 
               key={key}>
               <DadosAPi>
              {ano.nome}
              </DadosAPi>
              </ContainerMarcas>
             )
           }) nerMarcas>
             )
             }).splice(0,3)}
             </ContainerP2>
     
        <VerMais
        onPress={Ver}
        >
        <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
        </VerMais>

        <VoltarP2  onPress={()=> navigation.navigate('Page1')} >
         <TextVoltarP2>Voltar</TextVoltarP2>
      </VoltarP2>
      <ProximoP2 
       onPress={()=> navigation.navigate('Page3', {selected, veiculo, selectedP2})}
       disabled={selectedP2  ? false : true}
      >
     <TextProximoP2 >
       Proximo
      </TextProximoP2>
         </ProximoP2>
        </ScrollView>
       );
     
       
}
