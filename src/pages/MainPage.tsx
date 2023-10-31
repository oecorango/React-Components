import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import { PeopleSW } from '../components/PeopleSW';
import { Search } from '../components/Search';
import { SW_URL } from '../constants/api';
import { SWData } from '../interface/interface';
import styles from './MainPage.module.scss';

export const MainPage = (): JSX.Element => {
  const [getData, setData] = useState<SWData>();
  const [isDataLoading, setDataLoading] = useState(false);

  const getSPeopleData = async (): Promise<void> => {
    try {
      setDataLoading(true);

      const response = await fetch(SW_URL);
      const people = await response.json();

      setData(people);
      setDataLoading(false);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect((): void => {
    getSPeopleData();
  }, []);

  return (
    <main>
      <Search />

      <div className={styles.container}>
        {isDataLoading ? <Loader /> : <PeopleSW {...getData} />}
      </div>
    </main>
  );
};
