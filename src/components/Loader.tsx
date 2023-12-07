import styles from './Loader.module.scss';

export const Loader = (): JSX.Element => {
  return (
    <>
      <div className={styles.loader} />
      <p className={styles.paragraph}>Loading</p>
    </>
  );
};
