import { SWData } from '../interface/interface';
import styles from './PeopleSW.module.scss';

export const PeopleSW = (data: SWData): JSX.Element => {
  return (
    <>
      <p className={styles.header}>The main characters of the Star Wars saga:</p>
      {data?.results?.map((person, index) => (
        <p
          key={index}
          className={styles.person}
        >{`+ ${person.name}, ${person.gender}, year of birth: ${person.birth_year}. Click for more information...`}</p>
      ))}
    </>
  );
};
