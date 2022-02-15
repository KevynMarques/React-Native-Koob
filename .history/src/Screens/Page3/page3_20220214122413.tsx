import React{from "react";
import { View, Text } from "react-native";

export default ({route, navigation}: any)=>{

  const {selected, veiculo, selectedP2} = route.params;
  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

    const sel=(codigo : string ) =>{
      setSelectedP2(codigo);
   }

    const Ver =() => { 
      setAbrir(!abrir);
    }

    return (
     <ScrollView>
       <Sequencia> testando </Sequencia>
       <Description>Selecione o modelo do veiculo</Description>
         <ContainerP2> 
         {abrir ? modelo.map((modelo, key, )=> {
          
          return (
              <ContainerMarcas
              onPress={()=> (sel(modelo.codigo))} 
               key={key}>
               <DadosAPi>
              {modelo.nome}
              </DadosAPi>
              </ContainerMarcas>
             )
           }) : modelo.map((modelo, key, )=> {
          
           return (
             
             <ContainerMarcas
             onPress={()=> (sel(modelo.codigo))} 
             key={key}>
             <DadosAPi>
            {modelo.nome}
            </DadosAPi>
            </ContainerMarcas>
             )
             }).splice(0,3)}
             </ContainerP2>
     
        <VerMais
        onPress={Ver}
        >
        <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
        </VerMais>

        <VoltarP2  onPress={()=> navigation.navigate('Page1')} >
         <TextVoltarP2>Voltar</TextVoltarP2>
      </VoltarP2>
      <ProximoP2 
       onPress={()=> navigation.navigate('Page3', {selected, veiculo, selectedP2})}
       disabled={selectedP2  ? false : true}
      >
     <TextProximoP2 >
       Proximo
      </TextProximoP2>
         </ProximoP2>
        </ScrollView>
       );
     
       
}
