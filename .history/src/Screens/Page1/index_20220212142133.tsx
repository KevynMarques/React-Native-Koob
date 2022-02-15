import React from "react";
import { Sequencia } from "./style";
import { Description } from "../Home/Styled";
import { ButtonCar,ButtonCycle,ButtonTruck} from "../../Components/Buttons/style";



export default () =>{

  return (
  <>
   <Sequencia>
      Veiculos {'>'} Carros
   </Sequencia>
   <Description>Selecione o tipo do veiculo</Description>
   <ButtonCar
   source={require('../../Assets/CarHome.png')}
   ></ButtonCar>
   <ButtonCycle></ButtonCycle>
   <ButtonTruck></ButtonTruck>
  </>
  );

}