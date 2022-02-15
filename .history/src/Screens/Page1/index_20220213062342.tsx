import { useState } from "react";
import { Sequencia } from "./style";
import { Description } from "../Home/Styled";
import { ButtonCar, TextCar, IconCar } from "../../Components/Buttons/ButtonCarro/style";
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/Style";
import { ButtonTrucks, TextTruck, IconTruck} from "../../Components/Buttons/ButtonTruck/style";
import { IconMoto, TextMoto } from "../../Components/Buttons/ButtonMoto/Style";
import { SelectMarca } from "../../Components/Tittles&Textos";
import {  Scroll } from "./style";
import { View } from "react-native";
import ButtonTruck from "../../Components/Buttons/ButtonTruck";
import ButtonCarro from "../../Components/Buttons/ButtonCarro";
import ButtonMoto from "../../Components/Buttons/ButtonMoto";





export default () =>{
  const [trocar, setTrocar]=useState(<ButtonCarro />);
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

   <ButtonCycle onPress={()=>(setTroca(<ButtonMoto />))} >
        <IconMoto  source={require('../../Assets/Moto.png')}  />
        <TextMoto>Motos</TextMoto>
   </ButtonCycle>

   <ButtonTrucks>
        <IconTruck 
         source={require('../../Assets/Truck.png')} />
         <TextTruck>Caminhões</TextTruck>
   </ButtonTrucks> 

    <SelectMarca>Selecione a marca do veiculo</SelectMarca>
        <View 
        trocr={trocar}
        setTroca={setTrocar}
        >
          {trocar}
        </View>
       </Scroll>
  );

}