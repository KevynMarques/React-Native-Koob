import { useState } from "react";
import { Sequencia } from "./style";
import { Description } from "../Home/Styled";
import { ButtonCar, TextCar, IconCar } from "../../Components/Buttons/ButtonCarro/style";
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/Style";
import { ButtonTrucks, TextTruck, IconTruck} from "../../Components/Buttons/ButtonTruck/style";
import { IconMoto, TextMoto } from "../../Components/Buttons/ButtonMoto/Style";
import { SelectMarca } from "../../Components/Tittles&Textos";
import ButtonCarro from "../../Components/Buttons/ButtonCarro";
import {  Scroll } from "./style";
import { View } from "react-native";





export default () =>{
  const [troca, setTroca]=useState(<ButtonCarro />);
  return (
 <Scroll>
   <Sequencia>
      Veiculos {'>'} Carros
   </Sequencia>

   <Description>Selecione o tipo do veiculo</Description>

   <ButtonCar>
      <IconCar 
        source={require('../../Assets/CarHome.png')} />
      <TextCar>Carros</TextCar>
   </ButtonCar>

   <ButtonCycle>
        <IconMoto  source={require('../../Assets/Moto.png')}  />
        <TextMoto>Motos</TextMoto>
   </ButtonCycle>

   <ButtonTrucks>
        <IconTruck 
         source={require('../../Assets/Truck.png')} />
         <TextTruck>Caminhões</TextTruck>
   </ButtonTrucks> 

    <SelectMarca>Selecione a marca do veiculo</SelectMarca>
        <View>

        </View>
       </Scroll>
  );

}