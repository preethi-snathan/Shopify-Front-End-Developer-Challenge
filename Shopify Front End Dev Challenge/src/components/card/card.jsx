import PropTypes from 'prop-types';

import styles from './card.module.css';

export const Card = ({ data }) => {
  return (
    <li className={styles.root}>
      <p className={styles.heading}>Prompt</p>
      <p className={styles.text}>{data.prompt}</p>
      <h3 className={styles.heading}>Response</h3>
      <p className={styles.text}>{data.response}</p>
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.object
};

