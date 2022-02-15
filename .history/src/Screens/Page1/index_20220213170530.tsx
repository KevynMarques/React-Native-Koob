import React, {useEffect, useState} from "react"; 
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
import ButtonMoto from "../../Components/Buttons/ButtonMoto";
import {useNavigation} from '@react-navigation/native'
import { Proximo, TextProximo} from "../../Components/Buttons/ButtonProximo/style";
import { ContainerP } from "../../Components/ContainerPrincipal/style";
import Teste from "../../Components/Teste";



export default () =>{
  const [selected, setSelected] = useState('')
  const [veiculo, setVeiculo] = useState('carros')
  const [trocar, setTrocar]=useState(<Teste tipo={veiculo} setSelected={setSelected} />);
    
  const navigation = useNavigation(); 
  useEffect(()=>{
    setTrocar(<Teste tipo={veiculo} setSelected={setSelected} />)
    setSelected('')
  },[veiculo])

  return (
    <ContainerP>
    <Scroll>
   <Sequencia>
      Veiculos {'>'} Carros
   </Sequencia>

   <Description>Selecione o tipo do veiculo</Description>

   <BotaoCarros onPress={()=>setVeiculo('carros')}>
       <IconCar 
        source={require('../../Assets/CarHome.png')} />
      <TextCar>Carros</TextCar>
   </BotaoCarros>


   <ButtonCycle  onPress={()=> setVeiculo('motos')} >
        <IconMoto  source={require('../../Assets/Moto.png')}  />
        <TextMoto>Motos</TextMoto>
   </ButtonCycle>

   <ButtonTrucks  onPress={()=>setVeiculo('caminhoes')} >
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
      <Proximo 
       disabled={selected !== '' ? true : false}
      >
     <TextProximo>Proximo</TextProximo>
     </Proximo>
   </Scroll>
   </ContainerP>
  );

}