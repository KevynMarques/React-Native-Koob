import React,{useState, useEffect} from "react";
import {View, ScrollView } from "react-native";
import { api } from "../../Services/api";
import { ContainerP2 } from "../../Components/Containers/style";
import { VerMais } from "../../Components/Buttons/verMais/style";
import { DadosAPi, Description } from "../../Components/Diversos";
import { ContainerMarcas } from "../../Components/Containers/style";
import { TextoVer } from "../../Components/Buttons/verMais/style";
import { Sequencia } from "../../Components/Text&Title/style";
import { Voltar, TextVoltar } from "../../Components/Buttons/ButtonVoltar";
import { Proximo, TextProximo } from "../../Components/Buttons/ButtonProximo/style";
import { TextVoltar } from "../../Components/Buttons/ButtonVoltar";


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
       <Description>Selecione o modelo do veiculo</Description>
         <ContainerP2> 
         {abrir ? modelo.map((modelo, key, )=> {
          
          return (
              <ContainerMarcas
               key={key}>
               <DadosAPi>
              {modelo.nome}
              </DadosAPi>
              </ContainerMarcas>
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

        <Voltar  onPress={()=> navigation.navigate('Home')} >
         <TextVoltar>Voltar</TextVoltar>
      </Voltar>
      <Proximo 
       onPress={()=> navigation.navigate('Page2', {selected, veiculo})}
       disabled={selected  ? false : true}
      >
     <TextProximo >
       Proximo
       </TextProximo>
     </Proximo>
        </ScrollView>
       );
     
       
}
