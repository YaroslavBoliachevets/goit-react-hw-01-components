import PropTypes from 'prop-types';
import {StatisticsSection, Title, StatList,StatsListItem, LabelStats, Percentage } from './Stats.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map(statsItem => (
          <StatsListItem key={statsItem.id}>
            <LabelStats>{statsItem.label}</LabelStats>
            <Percentage>{statsItem.percentage}%</Percentage>
        </StatsListItem>
        ))}
      </StatList>
      
    </StatisticsSection>
  );
};

StatsListItem.propTypes = {
  statsItem: PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })

}