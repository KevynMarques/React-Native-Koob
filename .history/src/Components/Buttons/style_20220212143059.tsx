import styled from "styled-components/native";


export const ButtonCar = styled.TouchableOpacity`
position: absolute;
width: 110px;
height: 110px;
left: 15px;
top: 185px;
border: 1px solid #000000;
border-radius: 10px;
margin-top: 50px;
`;

export const ButtonCycle = styled(ButtonCar) `
 margin-left:135px;
`; 


export const ButtonTruck = styled(ButtonCycle) `
 margin-left: 270px;
`; 

export const IconCar = styled.Image `
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;