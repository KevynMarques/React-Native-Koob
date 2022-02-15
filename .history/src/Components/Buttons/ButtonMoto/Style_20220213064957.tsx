import styled from "styled-components/native";
import { ButtonCar } from "../ButtonCarro/style";
import { TextCar } from "../ButtonCarro/style";

export const IconMoto = styled.Image `
  width: 50px;
  height: 30px;

  
`;

export const ButtonCycle = styled.TouchableOpacity `
margin-left:135px;
position: absolute;
width: 120px;
height: 110px;
left: 12px;
top: 185px;
border: 1px solid #000000;
border-radius: 10px;
margin-top: 50px;
align-items: center;
justify-content: center;
`; 


export const TextMoto = styled(TextCar)`

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