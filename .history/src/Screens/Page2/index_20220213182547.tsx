
import { View, Text } from "react-native";
import { ContainerMarcas } from "../../Components/Buttons/ButtonCarro/Style";
import { DadosAPi } from "../../Components/Buttons/ButtonCarro/Style";
import { useEffect } from "react";
interface ApiProps {modelo:string}

export default ({route}: any) =>{
  const [modelo, setMarcas ] =  useState([]); 
  useEffect(() =>{ 

    api.get(`/${modelo}/marcas`).then((response)=>{
     setMarcas(response.data)
    }).catch(()=>{ 
     console.log('Erro api')
    })
    }, [modelo])

  return (
    <ContainerMarcas>
       <DadosAPi>
          teste
        </DadosAPi>
    </ContainerMarcas>
  );

}