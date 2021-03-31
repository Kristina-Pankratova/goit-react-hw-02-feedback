import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={s.feedbackBtnCont}>
      <button
        className={s.feedbackBtn}
        type="button"
        name="good"
        onClick={good => onLeaveFeedback(good)}
      >
        Good
      </button>
      <button
        className={s.feedbackBtn}
        type="button"
        name="neutral"
        onClick={neutral => onLeaveFeedback(neutral)}
      >
        Neutral
      </button>
      <button
        className={s.feedbackBtn}
        type="button"
        name="bad"
        onClick={bad => onLeaveFeedback(bad)}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
