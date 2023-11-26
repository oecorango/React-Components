import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
      <p className={styles.paragraph}>Loading</p>
    </div>
  );
}
