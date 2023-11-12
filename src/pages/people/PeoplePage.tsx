import { useContext, useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { PeopleSW } from '../../components/PeopleSW';
import { SW_URL } from '../../constants/api';
import styles from './PeoplePage.module.scss';
import { useSearchParams } from 'react-router-dom';
import { Context } from '../../context/context';
import { PAGE, SEARCH } from '../../constants/common';
import { START_PAGE } from '../../constants/pages';

export const PeoplePage = (): JSX.Element => {
  const { setData } = useContext(Context);

  const [isDataLoading, setDataLoading] = useState(false);

  const [pageParams] = useSearchParams();

  const currentPage = pageParams.get(PAGE) || START_PAGE;
  const currentSearch = pageParams.get(SEARCH) || '';

  useEffect((): void => {
    setDataLoading(true);
    fetch(`${SW_URL}people?search=${currentSearch}&page=${currentPage}`)
      .then((result) => result.json())
      .then((data) => setData(data))
      .then(() => setDataLoading(false));
  }, [currentPage, currentSearch]);

  return (
    <div className={isDataLoading ? styles.loading : styles.container}>
      {isDataLoading ? <Loader /> : <PeopleSW />}
    </div>
  );
};
