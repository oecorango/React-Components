import styles from './Header.module.scss';
import Search from './Search';

export const Header = (): JSX.Element => (
  <header className={styles.container}>
    <p className={styles.logo}>SW People</p>
    <Search />
  </header>
);
