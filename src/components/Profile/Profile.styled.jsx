import styled from "styled-components";

export const ProfileCard = styled.div`
max-width: ${p => p.theme.sizes.m};
margin: ${p => p.theme.space[5]}px
		${p => p.theme.space[9]};
padding-top: ${p => p.theme.space[5]}px;

background-color: ${p => p.theme.colors.mainBackgroundColor};
border-radius: ${p => p.theme.radii.m};
`;

export const Description = styled.div`
margin-bottom: ${p=> p.theme.space[5]}px;
`;

export const Avatar = styled.img`	display:block;
margin: ${p => p.theme.space[0]}px
		${p=>p.theme.space[9]};

width: ${p=> p.theme.sizes.s};
height: ${p=> p.theme.sizes.s};
`;

export const InfoName = styled.p`
text-align: center;
margin: ${p=> p.theme.space[3]}
		${p=> p.theme.space[0]};
`;

export const InfoAdditional = styled.p`
text-align:center;
color: ${p => p.theme.colors.secondary};
margin: ${p=> p.theme.space[3]}
		${p=> p.theme.space[0]}
`;

export const StatsList = styled.ul`
width:${p => p.theme.sizes.all};
display:flex;
text-align: center;
justify-content:space-between;
background-color:${p => p.theme.colors.secondaryBackgroundColor};
`;

export const StatsItem = styled.li`
display: flex;
flex-direction:column;
padding: ${p => p.theme.space[4]}px;
width: 33%;
border: ${p=> p.theme.borders.normal};
`;

export const Label = styled.span`
color: ${p=> p.theme.colors.secondary};
`;

export const StatsValue = styled.span`
margin-top: ${p=> p.theme.space[2]};
`;