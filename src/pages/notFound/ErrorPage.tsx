import styles from './ErrorPage.module.scss';

export const ErrorPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Page Not Found</p>
      <p className={styles.text}>404</p>
    </div>
  );
};
