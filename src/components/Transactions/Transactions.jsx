import PropTypes from 'prop-types';
import {Table, Tr, Th, Tbody, Transaction, Info } from './Transactions.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>

      <Tbody>
        {items.map(item => (
          <Transaction
		  	    key={item.id}
          >
            <Info>{item.type}</Info>
            <Info>{item.amount}</Info>
            <Info>{item.currency}</Info>
          </Transaction>
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propsType = {
  items: PropTypes.array,
  item: PropTypes.exact({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  })
}