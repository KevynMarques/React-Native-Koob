import React, {useEffect, useState} from "react"; 
import { Sequencia } from "../../Components/Textos/style";
import { Description } from "../../Components/Diversos";
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/style";
import { ButtonTrucks, TextTruck, IconTruck} from "../../Components/Buttons/ButtonTruck/style";
import { IconMoto, TextMoto } from "../../Components/Buttons/ButtonMoto/style";
import { SelectMarca } from "../../Components/Diversos";
import { H1car, IconeCar } from "../../Components/Buttons/ButtonCar/style";
import { Voltar, TextVoltar } from "../../Components/Buttons/ButtonVoltar";
import { Proximo, TextProximo} from "../../Components/Buttons/ButtonProximo/style";
import { ContainerP } from "../../Components/Containers/style";
import { ObuttonCar } from "../../Components/Buttons/ButtonCar/style";
import { View, ScrollView} from "react-native";
import Teste from "../../Components/Teste";



export default ({navigation} : any) =>{
  const [selected, setSelected] = useState('')
  const [veiculo, setVeiculo] = useState('carros')
  const [trocar, setTrocar]=useState(<Teste tipo={veiculo} setSelected={setSelected} />);
  const [borda, setBorda] = useState(true); 
    

  useEffect(()=>{
    setTrocar(<Teste tipo={veiculo} setSelected={setSelected} />)
    setSelected('')
  },[veiculo])



  return (
    
  <ContainerP>
    <ScrollView>
   <Sequencia>
      Veiculos{'>'}{veiculo}
   </Sequencia>
  
   <Description>Selecione o tipo do veiculo</Description>

   <ObuttonCar onPress={()=>(setVeiculo('carros'), disabled={selected  ? false : true})}>
               
       <IconeCar 
        source={require('../../Assets/CarHome.png')} />
      <H1car>Carros</H1car>
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
       <View>
         {trocar}
       </View> 
       <Voltar  onPress={()=> navigation.navigate('Home')} >
         <TextVoltar>Voltar</TextVoltar>
      </Voltar>
      <Proximo 
       onPress={()=> navigation.navigate('Page2', {selected, veiculo })}
       disabled={selected  ? false : true}
      >
     <TextProximo >
       Proximo
       </TextProximo>
     </Proximo>
   </ScrollView>
   </ContainerP>
  );

}