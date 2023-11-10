import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { PeopleSW } from '../../components/PeopleSW';
import { SWData, SWPeople } from '../../interface/interface';
import { SW_URL } from '../../constants/api';
import styles from './PeoplePage.module.scss';
import { useSearchParams } from 'react-router-dom';
import { PersonInfo } from '../../components/PersonInfo';

export const PeoplePage = (): JSX.Element => {
  const [getPeopleData, setPeopleData] = useState<SWData>();
  const [isDataLoading, setDataLoading] = useState(false);

  const [pageParams] = useSearchParams();

  const currentPage = pageParams.get('page') || '1';
  const currentSearch = pageParams.get('search') || '';

  useEffect((): void => {
    setDataLoading(true);
    fetch(`${SW_URL}people?search=${currentSearch}&page=${currentPage}`)
      .then((result) => result.json())
      .then((data) => setPeopleData(data))
      .then(() => setDataLoading(false));
  }, [currentPage, currentSearch]);

  return (
    <>
      <div className={styles.container}>
        {isDataLoading ? (
          <Loader />
        ) : (
          <PeopleSW count={getPeopleData?.count} results={getPeopleData?.results} />
        )}
      </div>
    </>
  );
};
