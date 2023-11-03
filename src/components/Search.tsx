import { useState } from 'react';
import styles from './Search.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getChapterInStorage } from '../utils/utils';
import { CHAPTER, SEARCH_STORAGE } from '../constants/common';

export const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [chapter, setChapter] = useState(getChapterInStorage());
  const navigate = useNavigate();
  const searchValue = localStorage.getItem(SEARCH_STORAGE);

  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit() {
    setSearchParams({ search: inputValue });
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={(event) => {
          localStorage.setItem(SEARCH_STORAGE, event.target.value);
          setInputValue(event.target.value);
        }}
        value={searchValue ? searchValue : ''}
        placeholder="Enter the hero`s name"
      />
      <select
        className={styles.select}
        value={chapter}
        onChange={(event) => {
          localStorage.setItem(CHAPTER, event.target.value);
          localStorage.setItem(SEARCH_STORAGE, '');
          setChapter(event.target.value);
          navigate(event.target.value !== 'people' ? event.target.value : '/');
        }}
      >
        <option value="people">People</option>
        <option value="films">Films</option>
        <option value="planets">Planets</option>
        <option value="starships">Star ships</option>
      </select>
      <button className={styles.searchButton} onClick={handleSubmit}>
        Search hero`s
      </button>
    </div>
  );
};
