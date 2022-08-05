import PropTypes from 'prop-types';
import {StatsListItem, LabelStats, Percentage} from './Stats.styled';

export const StatsItem = ({id, label, percentage}) => {
	return <StatsListItem key={id}>
      <LabelStats>{label}</LabelStats>
      <Percentage>{percentage}%</Percentage>
    </StatsListItem>
}

StatsItem.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	percentage: PropTypes.number,
}