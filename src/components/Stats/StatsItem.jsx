import css from './Stats.module.css';
import PropTypes from 'prop-types';

export const StatsItem = ({id, label, percentage}) => {
	return <li className={css.statListItem} key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
}

StatsItem.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	percentage: PropTypes.number,
}