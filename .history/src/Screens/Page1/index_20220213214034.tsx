import Re



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

   <ButtonCars onPress={()=>setVeiculo('carros')}>
       <IconCar 
        source={require('../../Assets/CarHome.png')} />
      <TextCarro>Carros</TextCarro>
   </ButtonCars>


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