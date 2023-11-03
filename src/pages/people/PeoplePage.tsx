import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { PeopleSW } from '../../components/PeopleSW';
import { SWData } from '../../interface/interface';
import { SW_URL } from '../../constants/api';
import styles from './PeoplePage.module.scss';
import { useSearchParams } from 'react-router-dom';

export const PeoplePage = (): JSX.Element => {
  const [getPeople, setPeople] = useState<SWData>();
  const [isDataLoading, setDataLoading] = useState(false);

  const [pageParams, setPageParams] = useSearchParams();

  const currentPage = pageParams.get('page') || '1';
  const currentSearch = pageParams.get('search') || '';

  useEffect((): void => {
    setDataLoading(true);
    fetch(SW_URL + 'people' + `?search=${currentSearch}` + `&page=${currentPage}`)
      .then((result) => result.json())
      .then((data) => setPeople(data))
      .then(() => setDataLoading(false));
  }, [currentPage, currentSearch]);

  return (
    <>
      <div className={styles.container}>
        {isDataLoading ? <Loader /> : <PeopleSW {...getPeople} />}
      </div>
    </>
  );
};
