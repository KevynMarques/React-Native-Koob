import React, {useEffect, useState} from "react"; 
import { Sequencia, ContainerTroca } from "./style";
import { Description } from "../Home/Styled";
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/style";
import { ButtonTrucks, TextTruck, IconTruck} from "../../Components/Buttons/ButtonTruck/style";
import { IconMoto, TextMoto } from "../../Components/Buttons/ButtonMoto/style";
import { SelectMarca } from "../../Components/Tittles&Textos";
import { Scroll } from "./style";
import { H1car } from "../../Components/Buttons/ButtonCar/style";
import { Voltar, TextVoltar } from "../../Components/Buttons/ButtonVoltar";
import { Proximo, TextProximo} from "../../Components/Buttons/ButtonProximo/style";
import { ContainerP } from "../../Components/ContainerPrincipal/style";
import { ObuttonCar } from "../../Components/Buttons/ButtonCar/style";

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

   <ObuttonCar onPress={()=>setVeiculo('carros')}>
       <IconCar 
        source={require('../../Assets/CarHome.png')} />
      <TextCarro>Carros</TextCarro>
   </ObuttonCar>


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