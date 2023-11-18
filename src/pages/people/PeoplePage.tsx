import { useContext, useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { PeopleSW } from '../../components/PeopleSW';

import styles from './PeoplePage.module.scss';
import { useSearchParams } from 'react-router-dom';
import { Context } from '../../context/context';
import { PAGE, SEARCH } from '../../constants/common';
import { START_PAGE } from '../../constants/pages';
import { fetchSwPeople } from '../../store/peopleSlice';
import { RootState } from '../../store';
import { SWData } from '../../interface/commons';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

export const PeoplePage = (): JSX.Element => {
  const [pageParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.people);

  const currentPage = pageParams.get(PAGE) || START_PAGE;
  const currentSearch = pageParams.get(SEARCH) || '';
  const searchParams = `?search=${currentSearch}&page=${currentPage}`;

  useEffect(() => {
    dispatch(fetchSwPeople(searchParams));
  }, [dispatch, searchParams]);

  return (
    <div className={loading ? styles.loading : styles.container}>
      {loading ? <Loader /> : <PeopleSW />}
      {error && <h1>{error}</h1>}
    </div>
  );
};
