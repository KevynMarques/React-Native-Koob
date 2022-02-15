import styled from "styled-components/native";


export const ButtonCar = styled.TouchableOpacity`
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

export const ButtonCycle = styled(ButtonCar) `
 margin-left:135px;
`; 


export const ButtonTruck = styled(ButtonCycle) `
 margin-left: 270px;
`; 

export const IconCar = styled.Image `
  width: 60px;
  height: 40px;
`;

export const IconMoto = styled.Image `
  width: 50px;
  height: 30px;
  
`;

export const IconTruck = styled.Image `
  width: 60px;
  height: 50px;
`;

