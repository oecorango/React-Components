import { useState } from 'react';
import styles from './Search.module.scss';
import { useSearchParams } from 'react-router-dom';
import { searchRequest } from '../utils/utils';
import { SEARCH_STORAGE } from '../constants/common';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchSwPeople, findPeople } from '../store/peopleSlice';
import { useAppSelector } from '../hooks/useAppSelector';

export const Search = (): JSX.Element => {
  const [_, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.people);
  const searchParams = searchRequest('1', searchValue);

  const [search, setSearch] = useState(searchValue);

  const handleSubmit = () => {
    dispatch(fetchSwPeople(searchParams));
    setSearchParams({ search: search });
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={(event) => {
          localStorage.setItem(SEARCH_STORAGE, event.target.value);
          setSearch(event.target.value);
          dispatch(findPeople(event.target.value));
        }}
        value={search}
        placeholder="Enter the hero`s name"
      />
      <button className={styles.searchButton} onClick={handleSubmit}>
        Search hero`s
      </button>
    </div>
  );
};
