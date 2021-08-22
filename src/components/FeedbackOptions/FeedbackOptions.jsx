import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.optionBtnList}>
      {options.map(option => (
        <li className={s.optionItem} key={shortid.generate()}>
          <button
            className={s.optionBtn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
