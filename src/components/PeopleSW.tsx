import { SWData } from '../interface/interface';
// import styles from './PeopleSW.module.scss';

export const PeopleSW = (props: SWData): JSX.Element => {
  const { results, next, previous, count } = props;
  console.log(results, next, previous, count);
  return (
    <>
      {/* {peoples?.length ? ( 
        <>
          <p className={styles.header}>The main characters of the Star Wars saga:</p>
          {peoples.map((person, index) => (
            <p
              key={index}
              className={styles.person}
            >{`+ ${person.name}, ${person.gender}, year of birth: ${person.birth_year}. Click for more information...`}</p>
          ))}
        </>
      ) : (
        <p className={styles.header}>A character with this name has not been found</p>
      )} */}
    </>
  );
};
