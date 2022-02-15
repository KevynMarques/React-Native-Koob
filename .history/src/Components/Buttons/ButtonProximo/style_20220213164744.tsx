import styled from "styled-components/native";


export const Proximo = styled.TouchableOpacity `
width: 187px;
height: 45px;
left: 203px;
top: 140px;
background:${props => props.disabled? '#2e2e2e' : '#000000'};
border-radius: 10px;
align-items: center;
justify-content: center;
`;

export const TextProximo = styled.Text `

font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;

`;