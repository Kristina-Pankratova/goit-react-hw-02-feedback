import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({title, children}) {
    return (
        <div className={s.feedbackSection}>
            {title && <h2 className={s.feedbackTitle}>{title}</h2>}
            {children}
        </div>
        
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object
}
