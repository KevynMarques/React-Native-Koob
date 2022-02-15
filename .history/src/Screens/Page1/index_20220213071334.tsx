import { useState } from "react";
import { Sequencia, ContainerTroca } from "./style";
import { Description } from "../Home/Styled";
import { ButtonCar, TextCar, IconCar } from "../../Components/Buttons/ButtonCarro/style";
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/Style";
import { ButtonTrucks, TextTruck, IconTruck} from "../../Components/Buttons/ButtonTruck/style";
import { IconMoto, TextMoto } from "../../Components/Buttons/ButtonMoto/Style";
import { SelectMarca } from "../../Components/Tittles&Textos";
import {  Scroll } from "./style";
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

   <ButtonCar >
      <IconCar 
        source={require('../../Assets/CarHome.png')} />
     
   </ButtonCar>

   <ButtonCycle >
        <IconMoto  source={require('../../Assets/Moto.png')}  />
       
   </ButtonCycle>

   <ButtonTrucks>
        <IconTruck 
         source={require('../../Assets/Truck.png')} />
         
   </ButtonTrucks> 

    <SelectMarca>Selecione a marca do veiculo</SelectMarca>
       <ContainerTroca>
         {trocar}
       </ContainerTroca>
       </Scroll>
  );

}