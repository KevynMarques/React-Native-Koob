import React, {useEffect, useState} from "react"; 
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/style";
import { ButtonTrucks, TextTruck, IconTruck} from "../../Components/Buttons/ButtonTruck/style";
import { IconMoto, TextMoto } from "../../Components/Buttons/ButtonMoto/style";
import { H1car, IconeCar } from "../../Components/Buttons/ButtonCar/style";
import { Voltar, TextVoltar } from "../../Components/Buttons/ButtonVoltar";
import { Proximo, TextProximo} from "../../Components/Buttons/ButtonProximo/style";
import { ContainerP, SelectMarca } from "../../Components/Containers/style";
import { ObuttonCar } from "../../Components/Buttons/ButtonCar/style";
import { View} from "react-native";
import FunctionGenerica from "../../Components/FunctionGenerica";
import { Description, Sequencia } from "../../Components/Textos/style";




export default ({navigation, props} : any) =>{
  const [selected, setSelected] = useState('')
  const [veiculo, setVeiculo] = useState('carros')
  const [selectednome, setSelectednome] = useState('')
  const [trocar, setTrocar]=useState(<FunctionGenerica  tipo={veiculo} 
     setSelected={setSelected} selected={selected}
     setSelectednome= {setSelectednome} />);



    

  useEffect(()=>{
    setTrocar(<FunctionGenerica  tipo={veiculo}
    setSelected={setSelected} selected={selected} 
   setSelectednome={setSelectednome} />)
    setSelected('')
  },[veiculo])

 

  
  return (
    <ContainerP>
   <Sequencia>
      Veiculos{'>'}{veiculo}{'>'}{selectednome}
   </Sequencia>
  
   <Description>Selecione o tipo do veiculo</Description>

   <ObuttonCar 
    disabled={ veiculo === 'carros'  ? true : false}
   onPress={()=>(setVeiculo('carros'))}>       
       <IconeCar 
        source={require('../../Assets/CarHome.png')} />
      <H1car>Carros</H1car>
   </ObuttonCar>


   <ButtonCycle 
   disabled={ veiculo === 'motos'  ? true : false}
   onPress={()=> setVeiculo('motos')} >
        <IconMoto  source={require('../../Assets/Moto.png')}  />
        <TextMoto>Motos</TextMoto>
   </ButtonCycle>

   <ButtonTrucks  
   disabled={ veiculo === 'caminhoes'  ? true : false}
   onPress={()=>setVeiculo('caminhoes')} >
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
       onPress={()=> navigation.navigate('Page2', {selected, veiculo, selectednome })}
       disabled={selected  ? false : true}
      >
     <TextProximo >
       Proximo
       </TextProximo>
     </Proximo>
   </ContainerP>
  );

}