import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { 
  Tittle, 
  SubTittle, 
  Description,
  Box,
  TittleBox,
  Car
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
       <Car>
       <Image
        source={require('../../Assets/CarHome.png')}
        style={{ width: 158, height: 105 }}/>
       </Car>
       <TittleBox>
         <Text>Veiculos</Text>
      </TittleBox>
     </Box>
     </>
  );

}