import { SWPeople } from '../interface/interface';
import styles from './PersonInfo.module.scss';

type Props = {
  personData: SWPeople | undefined;
  onClickClose: () => void;
};
export const PersonInfo = ({ personData, onClickClose }: Props): JSX.Element => {
  return personData ? (
    <div className={styles.personInfo}>
      <ul className={styles.active}>
        <li>Character name: {personData?.name}</li>
        <li>Date of Birth: {personData?.birth_year}</li>
        <li>Character gender: {personData?.gender}</li>
      </ul>
      <button className={styles.button} onClick={() => onClickClose()}>
        Close
      </button>
    </div>
  ) : (
    <ul className={styles.none}></ul>
  );
};
