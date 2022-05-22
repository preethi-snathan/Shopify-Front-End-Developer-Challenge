import styles from './footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>designed and built by{' '}
        {/* TODO: refactor link to ui-component */}
        <a
          className={styles.link}
          href="https://naumchik.me/"
          rel="noopener noreferrer"
          target="_blank">
          Irina Naumchik
        </a>
      </p>
    </div>
  );
};
