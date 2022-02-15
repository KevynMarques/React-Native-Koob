import React from "react";
import { Sequencia } from "./style";
import { Description } from "../Home/Styled";
import { ButtonCar,ButtonCycle,ButtonTruck,IconCar} from "../../Components/Buttons/style";
import { IconMoto, IconTruck } from "../../Components/Buttons/style";



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
   </ButtonCar>

   <ButtonCycle>
        <IconMoto  source={require('../../Assets/Moto.png')}  />
   </ButtonCycle>

   <ButtonTruck>
        <IconTruck />
   </ButtonTruck>
  </>
  );

}