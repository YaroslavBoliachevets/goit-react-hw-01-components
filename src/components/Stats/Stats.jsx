import css from './Stats.module.css';
import { StatsItem } from './StatsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(statsItem => (
          <StatsItem
            key={statsItem.id}
            id={statsItem.id}
            label={statsItem.label}
            percentage={statsItem.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
