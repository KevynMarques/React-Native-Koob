import styled from "styled-components/native";

export const TextCarro = styled.Text `
width: 65px;
height: 18px;
text-align: center;
margin-top: 15px;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 18px;
color: #686868;
`;

export const IconCar = styled.Image `
  width: 60px;
  height: 40px;
`;


export const ContainerL = styled.View `
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between; 
   margin-top: 470px;
`; 

export const ContainerMarcas = styled.TouchableOpacity `
height: 46px;
top: 500px;
background-color: #FFF;
border-radius: 10px;
margin:10px;
`;


export const DadosAPi = styled.Text `
font-weight: bold;
font-size: 18px;
color:#FC570C;
text-align: center;
padding-top: 8px;
padding-left: 5px;
padding-right: 5px;
`;



export const ButtonCars = styled.TouchableOpacity `  
position: absolute;
width: 120px;
height: 110px;
left: 12px;
top: 185px;
border-radius: 10px;
margin-top: 50px;
align-items: center;
justify-content: center;
z-index: 9999;
background-color: #ffffff;
`;