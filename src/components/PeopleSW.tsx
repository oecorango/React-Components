import { useEffect, useState } from 'react';
import { SWData, SWPeople } from '../interface/interface';
import styles from './PeopleSW.module.scss';
import { getIdPerson, getPageCount, getPagesArray } from '../utils/utils';
import { useSearchParams } from 'react-router-dom';
import { PAGE, POST_IN_PAGE, SEARCH } from '../constants/common';
import { START_PAGE } from '../constants/pages';
import { Loader } from './Loader';
import { PersonInfo } from './PersonInfo';
import { SW_URL } from '../constants/api';

export const PeopleSW = ({ count, results }: SWData): JSX.Element => {
  const [totalPages, setTotalPages] = useState<number[]>();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPageLocation = searchParams.get(PAGE) || START_PAGE;
  const [currentPage, setCurrentPage] = useState<string>(currentPageLocation);

  const currentSearch = searchParams.get(SEARCH) || '';

  const [idPerson, setIdPerson] = useState<number | null>(null);
  const [personData, setPersonData] = useState<SWPeople>();

  const [isPersonLoading, setPersonLoading] = useState(false);
  const handlerPeople = (id: number | null) => (id ? setIdPerson(id) : setIdPerson(null));

  const [infoPanel, setInfoPanel] = useState(false);

  const onClickClose = () => {
    setIdPerson(null);
    setInfoPanel(false);
  };

  useEffect(() => {
    const pages = getPageCount(count ? count : POST_IN_PAGE, POST_IN_PAGE);
    const allPages = getPagesArray(pages);
    setTotalPages(allPages);
  }, [count]);

  useEffect((): void => {
    if (idPerson) {
      setPersonLoading(true);
      fetch(`${SW_URL}people/${idPerson}`)
        .then((result) => result.json())
        .then((data) => setPersonData(data))
        .then(() => setPersonLoading(false));
    }
  }, [idPerson]);

  return (
    <>
      <p className={styles.header}>The main characters of the Star Wars saga:</p>
      <div className={styles.content}>
        <div className={infoPanel ? styles.listActive : styles.listPass}>
          {results?.length ? (
            results?.map((person, index) => {
              const id = getIdPerson(person.url);
              return (
                <p
                  key={index}
                  className={styles.person}
                  onClick={() => {
                    setInfoPanel(true);
                    handlerPeople(id);
                  }}
                >{`${index + 1}. ${person.name} - click for more information...`}</p>
              );
            })
          ) : (
            <p className={styles.person}>Sorry, nothing was found for this name...</p>
          )}
        </div>
        <div className={infoPanel ? styles.info : styles.none}>
          {isPersonLoading ? (
            <Loader />
          ) : (
            <PersonInfo personData={personData} onClickClose={onClickClose} />
          )}
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
