import { StatsItem } from './StatsItem';
import {StatisticsSection, Title, StatList} from './Stats.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map(statsItem => (
          <StatsItem
            key={statsItem.id}
            id={statsItem.id}
            label={statsItem.label}
            percentage={statsItem.percentage}
          />
        ))}
      </StatList>
      
    </StatisticsSection>
  );
};
