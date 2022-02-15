import styled from "styled-components/native";

export const ObuttonCar = styled.TouchableOpacity `  
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
border:${props => props.disabled? '
#FC570C' : '#ffffff'};;
`;

export const H1car = styled.Text `
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

export const IconeCar = styled.Image `
  width: 60px;
  height: 40px;
`;
