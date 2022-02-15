import React,{useState, useEffect} from "react";
import { View, Text, ScrollViewComponent} from "react-native";
import { api } from "../../Services/api";
import { ContainerL, ContainerMarcas } from "../../Components/Diversos";
import { VerMais } from "../../Components/Buttons/verMais/style";
import { DadosAPi } from "../../Components/Diversos";
import { TextoVer } from "../../Components/Buttons/verMais/style";

export default ({route}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
  const {selected, veiculo} = route.params;


  useEffect(() =>{ 

    api.get(`/${veiculo}/marcas/${selected}/modelos`).then((response)=>{
     setModelo(response.data.modelos)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [])

   const [abrir, setAbrir] = useState(false); 
    const Ver =() => { 
      setAbrir(!abrir);
    }

    return (
      <>
         <ContainerL> 
         {abrir ? modelo.map((modelo, key, )=> {
          
          return (
            <ScrollViewComponent>
              <ContainerMarcas 
               key={key}>
               <DadosAPi>
              {modelo.nome}
              </DadosAPi>
              </ContainerMarcas>
              </ScrollViewComponent> 
             )
           }) : modelo.map((modelo, key, )=> {
          
           return (
            <ScrollViewComponent> 
             <ContainerMarcas
             key={key}>
             <DadosAPi>
            {modelo.nome}
            </DadosAPi>
            </ContainerMarcas>
             )
             }).splice(0,7)})
             </ContainerL>

          </ScrollViewComponent> 
     
        <VerMais
        onPress={Ver}
        >
        <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
        </VerMais>
        </>
       );
     
       
}
