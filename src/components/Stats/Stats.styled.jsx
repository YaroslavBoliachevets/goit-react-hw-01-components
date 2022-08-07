import styled from "styled-components";

export const StatisticsSection = styled.div`
width:${p=> p.theme.sizes.m};
margin: ${p=> p.theme.space[5]}px
		${p=> p.theme.space[9]};
`;

export const Title = styled.h2`
margin:${p=>p.theme.space[0]};
margin-bottom:${p=>p.theme.space[3]}px;
text-align:center;
`;

export const StatList = styled.ul`
text-align:center;
justify-content:center;
display:flex;

`;

export const StatsListItem = styled.li`
display:flex;
flex-direction:column;
padding: ${p=>p.theme.space[4]}px;
width: ${p=>p.theme.sizes.quater};
background-color:${p=>p.theme.colors.violet}
};
:nth-child(2n) {
	background-color:${p=>p.theme.colors.aqua}
};
:nth-child(3n) {
	background-color:${p=>p.theme.colors.blueviolet}
};
:nth-child(4n) {
	background-color:${p=>p.theme.colors.burlywood}
};
:nth-child(5n) {
	background-color:${p=>p.theme.colors.tomato}
};

`;

export const LabelStats = styled.span`

`;

export const Percentage = styled.span`

`;
// background-color:${(p) => {
// 	console.log('p.children[0]', p.children[0].key)
// 	switch (p.children[0]._owner.key) {
// 		case "id-1":
// 			return p.theme.colors.aqua;
// 		// break;
// 		case "id-2":
// 			return p.theme.colors.blueviolet;
// 		// break;
// 		case "id-3":
// 			return p.theme.colors.burlywood;
// 		// break;
// 		case "id-4":
// 			return p.theme.colors.violet;
// 		// break;
// 		case "id-5":
// 			return p.theme.colors.tomato;
// 		// break;
// 		default:
// 			return p.theme.colors.red;
// 	}
// }};