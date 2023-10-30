import { useEffect, useState } from 'react';
import { PeopleSW } from '../components/PeopleSW';
import { Search } from '../components/Search';
import { SW_URL } from '../constants/api';
import { SWData } from '../interface/interface';
import styles from './MainPage.module.scss';

export const MainPage = (): JSX.Element => {
  const [getData, setData] = useState<SWData>();

  useEffect((): void => {
    fetch(SW_URL)
      .then((result) => result.json())
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <main>
      <Search />

      <div className={styles.container}>
        <PeopleSW results={getData} />
      </div>
    </main>
  );
};
