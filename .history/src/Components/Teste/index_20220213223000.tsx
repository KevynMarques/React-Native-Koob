import React, {useEffect, useState} from "react";
import { api } from "../../Services/api";
import { DadosAPi } from "../Diversos";
import {{ ContainerMarcas } from "../Buttons/ButtonCarros/style";}
import { ContainerL } from export const Tittle = styled.Text`
position: absolute;
width: 73px;
height: 41px;
left: 35px;
top: 77px;
font-family:Arial;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 41px;
color: #686868;

`; 

export const SubTittle = styled.Text `

position: absolute;
width: 270px;
height: 29px;
left: 35px;
top: 118px;
font-family:Arial;
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 29px;
color: #686868;
`;

export const Description = styled.Text `
  position: absolute;
width: 361px;
height: 47px;
left: 35px;
top: 170px;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #686868;
`;
;
import { VerMais, TextoVer } from "../Buttons/verMais/style";
interface TesteProps {tipo:string; setSelected:React.Dispatch<React.SetStateAction<string>>;}

export default ({tipo, setSelected} : TesteProps) => { 
    const [abrir, setAbrir] = useState(false); 
    const [marcas, setMarcas ] =  useState([]); 
  
   useEffect(() =>{ 

   api.get(`/${tipo}/marcas`).then((response)=>{
    setMarcas(response.data)
   }).catch(()=>{ 
    console.log('Erro api')
   })
   }, [tipo])
  
   const Ver =() => { 
     setAbrir(!abrir);
   }

   const sel=(codigo : string ) =>{
    setSelected(codigo);
 }
 
  
    return (
   <>
      <ContainerL> 
      {abrir ? marcas.map((marcas, key, )=> {
       
       return (
           <ContainerMarcas 
           onPress={()=> (sel(marcas.codigo))}  
            key={key}>
            <DadosAPi>
           {marcas.nome}
           </DadosAPi>
  
           </ContainerMarcas>
          )
        }) : marcas.map((marcas, key, )=> {
       
        return (
          <ContainerMarcas
          onPress={()=> (sel(marcas.codigo))}  
          key={key}>
          <DadosAPi>
         {marcas.nome}
         </DadosAPi>
         </ContainerMarcas>
          )
          }).splice(0,7)}
          </ContainerL>
  
     <VerMais
     onPress={Ver}
     >
     <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
     </VerMais>
  
     </>
    );
  
  }
