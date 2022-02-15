import React,{useState, useEffect} from "react";
import {View, ScrollView } from "react-native";
import { api } from "../../Services/api";
import { ContainerP2 } from "../../Components/Containers/style";
import { VerMais } from "../../Components/Buttons/verMais/style";
import { DadosAPi } from "../../Components/Diversos";
import { TextoVer } from "../../Components/Buttons/verMais/style";
import { Sequencia } from "../../Components/Text&Title/style";
import { ContainerMarcas } from "../../Components/Diversos";
import

export default ({route}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
  const {selected, veiculo} = route.params;


  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

   const [abrir, setAbrir] = useState(false); 
    const Ver =() => { 
      setAbrir(!abrir);
    }

    return (
     <ScrollView>
       <Sequencia> testando </Sequencia>
         <ContainerP2> 
         {abrir ? modelo.map((modelo, key, )=> {
          
          return (
              <View
               key={key}>
               <DadosAPi>
              {modelo.nome}
              </DadosAPi>
              </View>
             )
           }) : modelo.map((modelo, key, )=> {
          
           return (
             <ContainerMarcas
             key={key}>
             <DadosAPi>
            {modelo.nome}
            </DadosAPi>
            </ContainerMarcas>
             )
             }).splice(0,3)}
             </ContainerP2>
     
        <VerMais
        onPress={Ver}
        >
        <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
        </VerMais>
        </ScrollView>
       );
     
       
}
