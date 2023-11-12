import styles from './PlanetPage.module.scss';

export const PlanetsPage = (): JSX.Element => {
  return (
    <div className={styles.container} data-testid="planets-page">
      <p className={styles.text}>Content about Star Wars PLANETS coming soon</p>
    </div>
  );
};
