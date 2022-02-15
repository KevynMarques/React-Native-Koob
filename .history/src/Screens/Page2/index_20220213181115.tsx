import React from "react";
import { View, Text } from "react-native";
import { ContainerMarcas } from "../../Components/Buttons/ButtonCarro/Style";
import { DadosAPi } from "../../Components/Buttons/ButtonCarro/Style";

export default ({route}: any) =>{
  return (
    <ContainerMarcas>
       <DadosAPi></DadosAPi>>
        {route.params.selected}
        {route.params.veiculo}
      </Text> 
    </ContainerMarcas>
  );

}