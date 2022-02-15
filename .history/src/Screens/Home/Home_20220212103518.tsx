import React from "react";
import { View, Text } from "react-native";
import { Tittle, SubTittle, Description, Box } from "./Styled";

export default () =>{

  return (
    <>
     <Tittle>
      <Text> O</Text>
    </Tittle>

     <SubTittle>
      <Text> Bem vindo ao BRApp </Text>
     </SubTittle>

     <Description>
       Aqui é possivel realizar buscas das informacoes mais relevantes, basta selecionar um tema abaixo.
     </Description>
     <Box></Box>
     </>
  );

}