import React, {useEffect, useState}from "react";
import { api } from "../../Services/api";
import { ScrollView } from "react-native";
import {  DadosPres, Sequencia,Info} from "../../Components/Textos/style";
import { Description } from "../../Components/Diversos";
import {  ContainerP2, DadosVeiculoP4 } from "../../Components/Containers/style";
import { ProximoP2, TextProximoP2 } from "../../Components/Buttons/ButtonProximo/style";


export default ({route, navigation}: any)=>{

  const {selected, veiculo, selectedP2, selectedP3} = route.params;
  const [dados, setDados] = useState ([])

  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos/${selectedP2}/anos/${selectedP3}`).then((response)=>{
     setDados([response.data])
     console.log()
     
    }).catch(()=>{ 
     console.log('Erro api anos')
    })
    }, []) 
 
    return (
     <ScrollView>
       <Sequencia> testando </Sequencia>
       <Description
       style={{fontSize:20}}
       >Dados do Veiculo
       </Description>
       
         <ContainerP2> 
         {dados.map((dados, key )=> {
          
          return (
              <DadosVeiculoP4
               key={key}>

                <Info style={{fontSize:30}}
                >{dados.Valor}</Info>

                <Info style={{marginTop:50}}>
                {dados.Marca}</Info>
               </DadosVeiculoP4>

             )
           })}
            <DadosPres>Preço</DadosPres>
            <DadosPres style={{marginTop:50}} >Marca</DadosPres>
            <DadosPres
            >Preço</DadosPres>
             </ContainerP2>

             
      <ProximoP2 
       onPress={()=> navigation.navigate('Home')}
      >
     <TextProximoP2>Voltar ao inicio</TextProximoP2>
         </ProximoP2>
        </ScrollView>
       );
     
       
}
