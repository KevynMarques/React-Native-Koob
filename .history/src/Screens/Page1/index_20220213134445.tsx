import React, {useState} from "react"; 
import { Sequencia, ContainerTroca } from "./style";
import { Description } from "../Home/Styled";
import { TextCar, IconCar } from "../../Components/Buttons/ButtonCarro/style";
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/Style";
import { ButtonTrucks, TextTruck, IconTruck} from "../../Components/Buttons/ButtonTruck/style";
import { IconMoto, TextMoto } from "../../Components/Buttons/ButtonMoto/Style";
import { SelectMarca } from "../../Components/Tittles&Textos";
import { BotaoCarros } from "../../Components/Buttons/ButtonCarro/style";
import { Scroll } from "./style";
import { Voltar, TextVoltar } from "../../Components/Buttons/ButtonVoltar";
import ButtonTruck from "../../Components/Buttons/ButtonTruck";
import ButtonCarro from "../../Components/Buttons/ButtonCarro";
import ButtonMoto from "../../Components/Buttons/ButtonMoto";
import {useNavigation} from '@react-navigation/native'
import { Proximo, TextProximo} from "../../Components/Buttons/ButtonProximo/style";
import { ContainerP } from "../../Components/ContainerPrincipal/style";



export default () =>{
  const [trocar, setTrocar]=useState(<ButtonCarro />);
    
  const navigation = useNavigation(); 
  return (
    <ContainerP>
<Scroll>
   <Sequencia>
      Veiculos {'>'} Carros
   </Sequencia>

   <Description>Selecione o tipo do veiculo</Description>

   <BotaoCarros onPress={()=>setTrocar(<ButtonCarro/>)}>
       <IconCar 
        source={require('../../Assets/CarHome.png')} />
      <TextCar>Carros</TextCar>
       </BotaoCarros>


   <ButtonCycle  onPress={()=>setTrocar(<ButtonMoto/>)} >
        <IconMoto  source={require('../../Assets/Moto.png')}  />
        <TextMoto>Motos</TextMoto>
   </ButtonCycle>

   <ButtonTrucks  onPress={()=>setTrocar(<ButtonTruck/>)} >
        <IconTruck 
         source={require('../../Assets/Truck.png')} />
         <TextTruck>Caminhões</TextTruck>
   </ButtonTrucks> 

    <SelectMarca>Selecione a marca do veiculo</SelectMarca>
       <ContainerTroca>
         {trocar}
       </ContainerTroca> 
       <Voltar  onPress={()=> navigation.navigate('Home')} >
         <TextVoltar>Voltar</TextVoltar>
      </Voltar>
       <Proximo>
        <TextProximo>Proximo</TextProximo>
       </Proximo>
   </Scroll>
   </ContainerP>
  );

}