import React from "react";
import { View, Text } from "react-native";
import { Tittle, SubTittle, Description, Box } from "./Styled";

export default () =>{

  return (
    <View>
     <Tittle>Olá</Tittle>
     <SubTittle>Bem vindo ao BRApp.</SubTittle>
     <Description>Aqui é possivel realizar buscas das informacoes mais relevantes, basta selecionar um tema abaixo.</Description>
     <Box></Box>
    </View>
  );

}