import React,{useState, useEffect} from "react";
import {View, ScrollView } from "react-native";
import { api } from "../../Services/api";
import { ContainerP2, LimiteScroll } from "../../Components/Containers/style";
import {  VerMaisP2 } from "../../Components/Buttons/verMais/style";
import { DadosAPi, Description } from "../../Components/Diversos";
import { ContainerMarcas } from "../../Components/Containers/style";
import { TextoVer } from "../../Components/Buttons/verMais/style";
import { Sequencia } from "../../Components/Textos/style";
import { VoltarP2, TextVoltarP2 } from "../../Components/Buttons/ButtonVoltar";
import { ProximoP2, TextProximoP2 } from "../../Components/Buttons/ButtonProximo/style";


export default ({route, navigation}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
  const [selectedP2, setSelectedP2] = useState('')
  const [abrir, setAbrir] = useState(false); 
  const {selected, veiculo, selectednome} = route.params;


  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

    const sel=(codigo : string ) =>{
      setSelectedP2(codigo);
      selectednome(nome);
   }

    const Ver =() => { 
      setAbrir(!abrir);
    }

    return (
     <ScrollView>
       <Sequencia> Veiculos{'>'}{veiculo}</Sequencia>
       <Description>Selecione o modelo do veiculo</Description>
         <ContainerP2> 
            <LimiteScroll>
         {abrir ? modelo.map((modelo, key, )=> {
          
          return (
              <ContainerMarcas
              onPress={()=> (sel(modelo.codigo))} 
               key={key}>
               <DadosAPi>
              {modelo.nome}
              </DadosAPi>
              </ContainerMarcas>
             )
           }) : modelo.map((modelo, key, )=> {
          
           return (
             
             <ContainerMarcas
             onPress={()=> (sel(modelo.codigo))} 
             key={key}>
             <DadosAPi>
            {modelo.nome}
            </DadosAPi>
            </ContainerMarcas>
             )
             }).splice(0,3)}
             </LimiteScroll>
             </ContainerP2>
     
        <VerMaisP2
        onPress={Ver}
        >
        <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
        </VerMaisP2>

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
