import React from "react";
import { View, Text } from "react-native";
SubTittle
import { Box, Car, TittleBox } from "../../Components/Buttons/ButtomHomeCar/style";
import {useNavigation} from '@react-navigation/native'
import { ContainerP } from "../../Components/Containers/style";
import { SubTittle, Tittle } from "../../Components/Textos/style";

export default () =>{
  const navigation = useNavigation(); 
  return (
  <ContainerP>
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
      </ContainerP>
  );

}