import styles from './PeopleSW.module.scss';
import { getIdPerson } from '../utils/utils';
import { Loader } from './Loader';
import { PersonInfo } from './PersonInfo';
import { usePeopleSW } from '../hooks/usePeopleSW';

export const PeopleSW = (): JSX.Element => {
  const {
    infoPanel,
    setInfoPanel,
    handlerPeople,
    onClickClose,
    totalPages,
    setSearchParams,
    currentSearch,
    currentPage,
    results,
    loading,
  } = usePeopleSW();

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
