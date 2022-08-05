import styled from "styled-components";

export const FriendsList = styled.ul`
width: ${p=> p.theme.sizes.m};
margin-left: ${p=> p.theme.space[9]};
margin-right: ${p=> p.theme.space[9]};
`;

export const Item = styled.li`
display:flex;
align-items: center;
margin: ${p=>p.theme.space[3]}px;
border-radius: ${p=>p.theme.space[3]}px;
background-color: ${p=>p.theme.colors.aqua};
`;

export const Status = styled.span`
width:${p=>p.theme.space[4]}px;
height:${p=>p.theme.space[4]}px;
margin-left:${p=>p.theme.space[4]}px;
margin-right:${p=>p.theme.space[4]}px;
border-radius:${p=>p.theme.radii.round};
display:block;
background-color:${({theme, isOnline})=> {
return isOnline ? theme.colors.green : theme.colors.red;
}};
`;

export const Img = styled.img`

`;

export const Name = styled.span`
margin-left:${p=>p.theme.space[4]}px;
`;