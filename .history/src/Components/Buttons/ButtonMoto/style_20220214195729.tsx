import styled from "styled-components/native";

export const ButtonCycle = styled.TouchableOpacity `
position: absolute;
width: 120px;
height: 110px;
left: 145px;
top: 185px;
border-radius: 10px;
margin-top: 50px;
align-items: center;
justify-content: center;
z-index: 9999;
background-color: #ffffff;
border:${props => props.disabled? '#eb1a1a' : '#ff0000'};;
`; 

export const IconMoto = styled.Image `
  width: 50px;
  height: 30px;
`;


export const TextMoto = styled.Text `
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