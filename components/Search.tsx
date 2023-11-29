'use client';
import { FormEventHandler, useState } from 'react';
import styles from './Search.module.scss';
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    router.push(`?search=${search}&page=1`, { scroll: false });
  };
  const [search, setSearch] = useState('');
  const saveSearch = localStorage.getItem('searchValue');

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="search"
        value={saveSearch ? saveSearch : ''}
        onChange={(event) => {
          localStorage.setItem('searchValue', event.target.value);
          setSearch(event.target.value);
        }}
        placeholder="Enter the hero`s name"
      />
      <button className={styles.searchButton} type="submit">
        Search hero`s
      </button>
    </form>
  );
};

export default Search;
