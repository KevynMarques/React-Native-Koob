import React from "react";
import { View, Text } from "react-native";
import { 
  Tittle, SubTittle, 
  Description, Box, TittleBox, Car
 } from "./Styled";
  import { TestandoDNV } from "../../Components/Buttons/ButtonCarro/style";
 import {useNavigation} from '@react-navigation/native'

export default () =>{
  const navigation = useNavigation(); 
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

     <Box 
     onPress={()=> navigation.navigate('Page1')}
     > 
       <Car 
        source={require('../../Assets/CarHome.png')}
        />
       <TittleBox>
         <Text>Veiculos</Text>
      </TittleBox>
     </Box>
     <testandoDNV></testandoDNV>
     </>
  );

}