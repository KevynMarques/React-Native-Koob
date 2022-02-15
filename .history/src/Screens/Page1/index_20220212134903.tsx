import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Sequencia } from "./style";
import { Description } from "../Home/Styled";


export default () =>{

  return (
  <>
   <Sequencia>
      Veiculos {'>'} Carros
   </Sequencia>
   <Description>Selecione o modelo do veiculo</Description>
  </>
  );

}