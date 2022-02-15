import styled from "styled-components/native";
import { TextCarro } from "../ButtonCarro/Style";

export const ButtonTrucks = styled.TouchableOpacity `
 margin-left: 270px;
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

export const IconTruck = styled.Image `
  width: 60px;
  height: 50px;
`;


export const TextTruck = styled(TextCarro) `
 
`;