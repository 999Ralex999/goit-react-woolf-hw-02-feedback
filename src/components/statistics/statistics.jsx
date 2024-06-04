import css from './statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>Statistics</h2>
      <ul className={css.outcomesList}>
        <li className={css.outcomeList}>Good: {good}</li>
        <li className={css.outcomeList}>Neutral: {neutral}</li>
        <li className={css.outcomeList}>Bad: {bad}</li>
        <li className={css.outcomeList}>Total: {total}</li>
        <li className={css.outcomeList}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};
