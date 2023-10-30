import styles from './Search.module.scss';

export const Search = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={(event) => localStorage.setItem('searchValue', event.target.value)}
        placeholder="Enter the hero`s name"
      />
      <button
        className={styles.searchButton}
        onClick={() => console.log(localStorage.getItem('searchValue'))}
      >
        Search hero`s
      </button>
    </div>
  );
};
