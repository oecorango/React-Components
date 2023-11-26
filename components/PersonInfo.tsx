'use client';
import { SWPeople } from 'interfaces';
import styles from './PersonInfo.module.scss';

type Props = {
  personData: SWPeople | null;
};

export default function PersonInfo({ personData }: Props) {
  return personData ? (
    <div className={styles.personInfo}>
      <ul className={styles.active}>
        <li>Character name: {personData.name}</li>
        <li>Date of Birth: {personData.birth_year}</li>
        <li>Character gender: {personData.gender}</li>
      </ul>
      <button className={styles.button} onClick={() => console.log('12')}>
        Close
      </button>
    </div>
  ) : (
    <ul className={styles.none}></ul>
  );
}
