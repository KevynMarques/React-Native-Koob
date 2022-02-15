import styled from "styled-components/native";


export const Proximo = styled.TouchableOpacity `
width: 187px;
height: 45px;
left: 203px;
top: 140px;
background:${props => props.disabled? 'rgba(252, 87, 12, 0.44);' : '#FC570C' };
border-radius: 10px;
align-items: center;
justify-content: center;
flex: 1;
`;

export const TextProximo = styled.Text `

font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;

`;


export const ProximoP2 = styled.TouchableOpacity `
width: 187px;
height: 45px;
left: 200px;
top: 810px;
background:${props => props.disabled? 'rgba(252, 87, 12, 0.44);' : '#FC570C' };
border-radius: 10px;
align-items: center;
justify-content: center;
`;

export const TextProximoP2 = styled.Text `

font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;

`;