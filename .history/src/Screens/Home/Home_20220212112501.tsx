import React from "react";
import { View, Text, Image } from "react-native";
import { 
  Tittle, 
  SubTittle, 
  Description,
  Box,
  TittleBox,
  CarHome
 } from "./Styled";

export default () =>{

  return (
    <>
     <Tittle>
      <Text> Olá </Text>
    </Tittle>

     <SubTittle>
      <Text> Bem vindo ao BRApp. </Text>
     </SubTittle>

     <Description> 
       <Text>
       Aqui é possivel realizar buscas das informacoes mais relevantes, basta selecionar um tema abaixo.
       </Text>
     </Description>

     <Box>
       <TittleBox>
         <Text>Veiculos</Text>
        
        <CarHome>
        <Image
        source={require('../../Assets/CarHome.png')}
        style={{ width: 40, height: 40 }}
        </CarHome>
       </TittleBox>
     </Box>
     </>
  );

}