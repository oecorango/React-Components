import { useEffect, useState } from 'react';
import { getSWData } from '../../api/api';
import { Loader } from '../../components/Loader';
import { PeopleSW } from '../../components/PeopleSW';
import { Search } from '../../components/Search';
import { useGetPeople } from '../../hooks/useGetPeople';
import { SWData } from '../../interface/interface';
import styles from './MainPage.module.scss';
import { useSearchParams } from 'react-router-dom';

export const MainPage = (): JSX.Element => {
  const [getData, setData] = useState<SWData>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const { isDataLoading, error, getPeople } = useGetPeople(async () => {
    console.log(searchParams);
    const data = await getSWData('');
    if (data) setData(data);
  });

  useEffect((): void => {
    getPeople;
  }, []);

  return (
    <main>
      <Search />

      <div className={styles.container}>
        <p>{error}</p>
        {isDataLoading ? <Loader /> : <PeopleSW {...getData} />}
      </div>
    </main>
  );
};
