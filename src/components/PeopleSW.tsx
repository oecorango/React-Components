import styles from './PeopleSW.module.scss';
import { getIdPerson, getPageCount, getPagesArray } from '../utils/utils';
import { Loader } from './Loader';
import { PersonInfo } from './PersonInfo';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PAGE, POST_IN_PAGE, SEARCH } from '../constants/common';
import { START_PAGE } from '../constants/pages';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchSwPerson } from '../store/personSlice';

export const PeopleSW = (): JSX.Element => {
  const [totalPages, setTotalPages] = useState<number[]>();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPageLocation = searchParams.get(PAGE) || START_PAGE;
  const [currentPage] = useState<string>(currentPageLocation);

  const currentSearch = searchParams.get(SEARCH) || '';

  const [idPerson, setIdPerson] = useState<number | null>(null);

  const handlerPeople = (id: number | null) => (id ? setIdPerson(id) : setIdPerson(null));

  const [infoPanel, setInfoPanel] = useState(false);

  const onClickClose = () => {
    setIdPerson(null);
    setInfoPanel(false);
  };

  const dispatch = useAppDispatch();

  const { count, results } = useAppSelector((state) => state.people.response);

  const { loading } = useAppSelector((state) => state.person);

  useEffect(() => {
    dispatch(fetchSwPerson(idPerson));
  }, [dispatch, idPerson]);

  useEffect(() => {
    const pages = getPageCount(count ? count : POST_IN_PAGE, POST_IN_PAGE);
    const allPages = getPagesArray(pages);
    setTotalPages(allPages);
  }, [count]);

  return (
    <>
      <p className={styles.header}>The main characters of the Star Wars saga:</p>
      <div className={styles.content}>
        <div className={infoPanel ? styles.listActive : styles.listPass}>
          {results?.length ? (
            results.map((person, index) => {
              const id = getIdPerson(person.url);
              return (
                <p
                  key={index}
                  className={styles.person}
                  onClick={() => {
                    setInfoPanel(true);
                    handlerPeople(id);
                  }}
                >{`${id}. ${person.name} - click for more information...`}</p>
              );
            })
          ) : (
            <p className={styles.person}>Sorry, nothing was found for this name...</p>
          )}
        </div>
        <div className={infoPanel ? styles.info : styles.none}>
          {loading ? <Loader /> : <PersonInfo onClickClose={onClickClose} />}
        </div>
      </div>

      <div className={styles.pagination}>
        {totalPages?.map((page, index) => (
          <button
            onClick={() => {
              setSearchParams({ search: currentSearch, page: page.toString() });
            }}
            key={index}
            className={
              currentPage === page.toString()
                ? styles.paginationButtonActive
                : styles.paginationButton
            }
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};
