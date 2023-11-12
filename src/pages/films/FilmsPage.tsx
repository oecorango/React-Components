import styles from './FilmsPage.module.scss';

export const FilmsPage = (): JSX.Element => {
  return (
    <>
      <div className={styles.container} data-testid="films-page">
        <p className={styles.text}>Content about Star Wars MOVIES coming soon</p>
      </div>
    </>
  );
};
