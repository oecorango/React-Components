import { useEffect, useState } from 'react';
import { SWData } from '../interface/interface';
import styles from './PeopleSW.module.scss';
import { getPageCount, getPagesArray } from '../utils/utils';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PAGE, POST_IN_PAGE, SEARCH } from '../constants/common';
import { START_PAGE } from '../constants/pages';

export const PeopleSW = ({ count, results }: SWData): JSX.Element => {
  const [totalPages, setTotalPages] = useState<number[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPageLocation = searchParams.get(PAGE) || START_PAGE;
  const [currentPage, setCurrentPage] = useState<string>(currentPageLocation);

  const currentSearch = searchParams.get(SEARCH) || '';

  useEffect(() => {
    const pages = getPageCount(count ? count : POST_IN_PAGE, POST_IN_PAGE);
    const allPages = getPagesArray(pages);
    setTotalPages(allPages);
  }, [count]);

  return (
    <>
      <p className={styles.header}>The main characters of the Star Wars saga:</p>
      {results?.length ? (
        results?.map((person, index) => (
          <p
            key={index}
            className={styles.person}
            onClick={() => navigate(`/${index + 1}`)}
          >{`+ ${person.name}, ${person.gender}, year of birth: ${person.birth_year}. Click for more information...`}</p>
        ))
      ) : (
        <p className={styles.person}>Sorry, nothing was found for this name...</p>
      )}
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
