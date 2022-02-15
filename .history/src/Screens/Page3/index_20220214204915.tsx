import React, {useEffect, useState}from "react";
import { api } from "../../Services/api";
import { ScrollView } from "react-native";
import { Sequencia} from "../../Components/Textos/style";
import { DadosAPi, Description } from "../../Components/Diversos";
import { ContainerMarcas, ContainerP2 } from "../../Components/Containers/style";
import { TextVoltarP2, VoltarP2 } from "../../Components/Buttons/ButtonVoltar";
import { ProximoP2, TextProximoP2 } from "../../Components/Buttons/ButtonProximo/style";


export default ({route, navigation}: any)=>{

  const {selected, veiculo, selectedP2, selectednomeP2} = route.params;
  const [ano, setAno] = useState ([])
  const [selectedP3, setSelectedP3] = useState('')

  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos/${selectedP2}/anos`).then((response)=>{
     setAno(response.data)     
     
    }).catch(()=>{ 
     console.log('Erro api anos')
    })
    }, []) 

    const sel=(codigo : string ) =>{
      setSelectedP3(codigo);
   }

 
    return (
     <ScrollView>
       <Sequencia> testando </Sequencia>
       <Description>Selecione o ano do veiculo</Description>
       
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
           })}
             </ContainerP2>
     

        <VoltarP2  onPress={()=> navigation.navigate('Page1')} >
       <TextVoltarP2>Voltar</TextVoltarP2>
      </VoltarP2>
      <ProximoP2 
       onPress={()=> navigation.navigate('Page4', {selected, veiculo, selectedP2, selectedP3})}
       disabled={selectedP3  ? false : true}
      >
     <TextProximoP2 >Proximo</TextProximoP2>
         </ProximoP2>
        </ScrollView>
       );
     
       
}
