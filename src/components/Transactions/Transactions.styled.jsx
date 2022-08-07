import styled from "styled-components";

export const Table = styled.table`
width: ${p=> p.theme.sizes.l};
margin-left:${p=>p.theme.space[9]};
margin-right:${p=>p.theme.space[9]};
`;


export const Tr = styled.tr`
background-color:${p=>p.theme.colors.aqua};
`;

export const Th = styled.th`
width:33%;
`;

export const Tbody = styled.tbody`
`;

export const Transaction = styled.tr`
:nth-child(2n) td{
	background-color:${p=>p.theme.colors.mainBackgroundColor}
};
`;

export const Info = styled.td`
text-align:center;
`;


// export const Thead = styled.thead`

// `;