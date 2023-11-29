'use client';
import { FormEventHandler, useState } from 'react';
import styles from './Search.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import { getItemFromLocalStorage } from 'utils';

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    router.push(`?search=${searchValue}&page=1`, { scroll: false });
  };
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="search"
          value={getItemFromLocalStorage() ? getItemFromLocalStorage() : searchValue}
          onChange={(event) => {
            localStorage.setItem('saveSearch', event.target.value);
            setSearchValue(event.target.value);
          }}
          placeholder="Enter the hero`s name"
        />
        <button className={styles.searchButton} type="submit">
          Search hero`s
        </button>
      </form>
    </>
  );
};

export default Search;
