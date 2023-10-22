import styles from './Header.module.scss';

export const Header = (): JSX.Element => (
  <header className={styles.container}>
    <p>SW People</p>
    <input type="text" />
    <button>Search people</button>
  </header>
);
