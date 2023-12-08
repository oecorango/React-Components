'use client';
import { SWPeople } from 'interfaces';
import styles from './PersonInfo.module.scss';
import Link from 'next/link';

type Props = {
  personData: SWPeople | undefined;
  searchParams: { [key: string]: string };
};

export default function PersonInfo({ personData, searchParams }: Props) {
  const { search, page } = searchParams;
  return personData?.detail !== 'Not found' ? (
    <div className={styles.personInfo}>
      <ul className={styles.active}>
        <li>Character name: {personData?.name}</li>
        <li>Date of Birth: {personData?.birth_year}</li>
        <li>Character gender: {personData?.gender}</li>
      </ul>
      <Link href={`?search=${search}&page=${page}`} className={styles.link}>
        Close
      </Link>
    </div>
  ) : (
    <></>
  );
}
