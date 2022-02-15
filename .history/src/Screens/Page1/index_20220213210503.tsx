import React, {useEffect, useState} from "react"; 
import { Sequencia, ContainerTroca } from "./style";
import { Description } from "../Home/Styled";
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/style";
import { ButtonTrucks, TextTruck, IconTruck} from "../../Components/Buttons/ButtonTruck/style";
import { IconMoto, Text } from "../../Components/Buttons/ButtonMoto/style";
import { SelectMarca } from "../../Components/Tittles&Textos";
import { BotaoCarros } from "../../Components/Buttons/ButtonCarro/Style";
import { Scroll } from "./style";
import { Voltar, TextVoltar } from "../../Components/Buttons/ButtonVoltar";
import { Proximo, TextProximo} from "../../Components/Buttons/ButtonProximo/style";
import { ContainerP } from "../../Components/ContainerPrincipal/style";
import { TextCar, IconCar } from "../../Components/Buttons/ButtonCarro/Style";
import Teste from "../../Components/Teste";



export default ({navigation} : any) =>{
  const [selected, setSelected] = useState('')
  const [veiculo, setVeiculo] = useState('carros')
  const [trocar, setTrocar]=useState(<Teste tipo={veiculo} setSelected={setSelected} />);
    

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
       onPress={()=> navigation.navigate('Page2', {selected, veiculo})}
       disabled={selected  ? false : true}
      >
     <TextProximo >
       Proximo
       </TextProximo>
     </Proximo>
   </Scroll>
   </ContainerP>
  );

}