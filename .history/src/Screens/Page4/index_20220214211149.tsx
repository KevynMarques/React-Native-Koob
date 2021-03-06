import React, {useEffect, useState}from "react";
import { api } from "../../Services/api";
import { ScrollView } from "react-native";
import {  DadosPres, Sequencia,Info} from "../../Components/Textos/style";
import { Description } from "../../Components/Diversos";
import {  ContainerP2, DadosVeiculoP4 } from "../../Components/Containers/style";
import { ProximoP2, TextProximoP2 } from "../../Components/Buttons/ButtonProximo/style";


export default ({route, navigation}: any)=>{

  const {selected, veiculo, selectedP2, selectedP3, selectednome, selectednomeP2, selectednomeP3} = route.params;
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
       <Sequencia>Veiculos{'>'}{veiculo}{'>'}{selectednome}{"\n"}{'>'}{selectednomeP2}{'>'}{"\n"}{selectednomeP3}</Sequencia>
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

                <Info style={{marginTop:100}}>
                {dados.Modelo}</Info>

                <Info style={{marginTop:150, font }}>
                {dados.AnoModelo}</Info>
                
                <Info style={{marginTop:200}}>
                {dados.Combustivel}</Info>

                <Info style={{marginTop:250}}>
                {dados.CodigoFipe}</Info>

                <Info style={{marginTop:300}}>
                {dados.MesReferencia}</Info>

                <Info style={{marginTop:350}}>
                {dados.SiglaCombustivel}</Info>
                
                <Info style={{marginTop:400}}>
                {dados.TipoVeiculo}</Info>

               </DadosVeiculoP4>
             )
           })}
            <DadosPres>Pre??o</DadosPres>
            <DadosPres style={{marginTop:50}}>Marca</DadosPres>
            <DadosPres style={{marginTop:100}}>Modelo</DadosPres>
            <DadosPres style={{marginTop:150}}>Ano Modelo</DadosPres>
            <DadosPres style={{marginTop:200}}>Combustivel</DadosPres>
            <DadosPres style={{marginTop:250}}>Codigo FIPE</DadosPres>
            <DadosPres style={{marginTop:300}}>M??s ref.</DadosPres>
            <DadosPres style={{marginTop:350}}>Sigla Combustivel</DadosPres>
            <DadosPres style={{marginTop:400}}>Tipo Veiculo</DadosPres>
             </ContainerP2>

             
      <ProximoP2 
      style={{marginLeft: -80}}
       onPress={()=> navigation.navigate('Home')}
      >
     <TextProximoP2 >Voltar ao inicio
     </TextProximoP2 >
         </ProximoP2 >
        </ScrollView>
       );
     
       
}
