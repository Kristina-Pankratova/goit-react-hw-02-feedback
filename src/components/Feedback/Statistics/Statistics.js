import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <ul className={s.statisticsList}>
        <li className={s.statisticItem}>Good: {good}</li>
        <li className={s.statisticItem}>Neutral: {neutral}</li>
        <li className={s.statisticItem}>Bad: {bad}</li>
        <li className={s.statisticItem}>Total: {total}</li>
        <li className={s.statisticItem}>
          Positive feedback: {positivePercentage}
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
