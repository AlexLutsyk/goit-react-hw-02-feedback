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
    <ul className={s.statisticList}>
      <li className={s.statisticItem}>
        <span>Good: {good}</span>
      </li>
      <li className={s.statisticItem}>
        <span>Neutral: {neutral}</span>
      </li>
      <li className={s.statisticItem}>
        <span>Bad: {bad}</span>
      </li>
      <li className={s.statisticItem}>
        <span>Total: {total}</span>
      </li>
      <li className={s.statisticItem}>
        <span>
          {' '}
          Positive Feedback:{' '}
          {positivePercentage > 50 ? good : positivePercentage}%
        </span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
