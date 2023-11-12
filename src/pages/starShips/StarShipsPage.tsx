import styles from './StarShipsPage.module.scss';

export const StarShipsPage = (): JSX.Element => {
  return (
    <div className={styles.container} data-testid="starShips-page">
      <p className={styles.text}>
        Coming soon there will be content about STAR-SHIPS from Star Wars
      </p>
    </div>
  );
};
