import { Sequencia } from "./style";
import { Description } from "../Home/Styled";
import { ButtonCar, TextCar, IconCar } from "../../Components/Buttons/ButtonCarro/style";
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/Style";
import { ButtonTruck, TextTruck} from "../../Components/Buttons/ButtonCaminhao/style";
import { IconMoto, TextMoto } from "../../Components/Buttons/ButtonMoto/Style";
import { IconTruck } from "../../Components/Buttons/ButtonCaminhao/style";
import { SelectMarca } from "../../Components/Tittles&Textos";
import {  Scroll } from "./style";
import ButtonCarro from "../../Components/Buttons/ButtonCarro";
import ButtonMoto from "../../Components/Buttons/ButtonMoto";
import ButtonCaminhao from "../../Components/Buttons/ButtonCaminhao";





export default () =>{


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

   <ButtonTruck>
        <IconTruck 
         source={require('../../Assets/Truck.png')} />
         <TextTruck>Caminhões</TextTruck>
   </ButtonTruck> 

    <SelectMarca>Selecione a marca do veiculo</SelectMarca>
       <ButtonCaminhao
       </Scroll>
  );

}