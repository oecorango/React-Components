'use client';
import styles from './Search.module.scss';

export const Search = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <input className={styles.searchInput} type="text" placeholder="Enter the hero`s name" />
      <button className={styles.searchButton}>Search hero`s</button>
    </div>
  );
};
