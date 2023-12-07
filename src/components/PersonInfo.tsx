import { CloseFunction } from '../interface/commons';
import styles from './PersonInfo.module.scss';
import { useAppSelector } from '../hooks/useAppSelector';

export const PersonInfo = ({ onClickClose }: CloseFunction): JSX.Element => {
  const { personData } = useAppSelector((state) => state.person);

  return personData ? (
    <div className={styles.personInfo}>
      <ul className={styles.active}>
        <li>Character name: {personData.name}</li>
        <li>Date of Birth: {personData.birth_year}</li>
        <li>Character gender: {personData.gender}</li>
      </ul>
      <button className={styles.button} onClick={() => onClickClose()}>
        Close
      </button>
    </div>
  ) : (
    <ul className={styles.none}></ul>
  );
};
