import styles from './Header.module.scss';

export const Header = (): JSX.Element => (
  <header className={styles.container}>
    <p className={styles.logo}>SW People</p>
  </header>
);
