import React from "react";
import { Sequencia } from "./style";
import { Description } from "../Home/Styled";
import {ButtonCycle,ButtonTruck} from "../../Components/Buttons/style";
import { IconMoto, IconTruck } from "../../Components/Buttons/style";
import { ButtonCar, TextCar,ICO } from "../../Components/Buttons/ButtonCarro/style";



export default () =>{

  return (
  <>
   <Sequencia>
      Veiculos {'>'} Carros
   </Sequencia>

   <Description>Selecione o tipo do veiculo</Description>

   <ButtonCar>
      <IconCar 
        source={require('../../Assets/CarHome.png')}
      />
      <TextCar>Carros</TextCar>
   </ButtonCar>

   <ButtonCycle>
        <IconMoto  source={require('../../Assets/Moto.png')}  />
   </ButtonCycle>

   <ButtonTruck>
        <IconTruck 
         source={require('../../Assets/Truck.png')} />
   </ButtonTruck>
  </>
  );

}