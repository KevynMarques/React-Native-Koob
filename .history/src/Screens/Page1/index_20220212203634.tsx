import React, {useEffect, useState} from "react";
import { Sequencia } from "./style";
import { Description } from "../Home/Styled";
import { ButtonCar, TextCar, IconCar } from "../../Components/Buttons/ButtonCarro/style";
import { ButtonCycle } from "../../Components/Buttons/ButtonMoto/Style";
import { ButtonTruck, TextTruck} from "../../Components/Buttons/ButtonTruck/style";
import { IconMoto, TextMoto } from "../../Components/Buttons/ButtonMoto/Style";
import { IconTruck } from "../../Components/Buttons/ButtonTruck/style";
import { SelectMarca } from "../../Components/Tittles&Textos";
import { api } from "../../Services/api";
import { ContainerMarcas } from "../../Components/Buttons/Marcas/Style";
import { ContainerL, Scroll } from "./style";
import { VerMais } from "../../Components/Buttons/verMais/style";



export default () =>{
           
   const [marcas, setMarcas ] =  useState([]); 

   useEffect(() =>{
   api.get('/carros/marcas').then((response)=>{
    setMarcas(response.data)
   }).catch(()=>{
    console.log('Error api')
   })
   }, [])


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
      
    <ContainerL>
    
      {marcas.map((marcas, key)=> {
        return (
            <ContainerMarcas
            key={key}>
            {marcas.nome}
            </ContainerMarcas>
        )
      })}
       </ContainerL>
       <VerMais></VerMais>
       </Scroll>
  );

}