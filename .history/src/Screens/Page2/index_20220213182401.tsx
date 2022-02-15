
import { View, Text } from "react-native";
import { ContainerMarcas } from "../../Components/Buttons/ButtonCarro/Style";
import { DadosAPi } from "../../Components/Buttons/ButtonCarro/Style";
import { useEffect } from "react";
interface TesteProps {tipo:string
export default ({route}: any) =>{
  
  useEffect(() =>{ 

    api.get(`/${demodelo}/marcas`).then((response)=>{
     setMarcas(response.data)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [tipo])

  return (
    <ContainerMarcas>
       <DadosAPi>
          teste
        </DadosAPi>
    </ContainerMarcas>
  );

}