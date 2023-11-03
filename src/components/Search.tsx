import { useState } from 'react';
import styles from './Search.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getChapterInStorage } from '../utils/utils';

export const Search = (): JSX.Element => {
  const [saveValue, setSaveSearch] = useState('');
  const [chapter, setChapter] = useState(getChapterInStorage());
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit() {
    setSearchParams(`/${chapter}/?search=${saveValue}`);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={(event) => {
          localStorage.setItem('searchValue', event.target.value);
          setSaveSearch(event.target.value);
        }}
        value={saveValue}
        placeholder="Enter the hero`s name"
      />
      <select
        className={styles.select}
        value={chapter}
        onChange={(event) => {
          localStorage.setItem('chapterValue', event.target.value);
          setChapter(event.target.value);
          navigate(event.target.value);
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
