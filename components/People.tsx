'use client';
import { SWPeople } from 'interfaces';
import { getIdPerson } from 'utils';
import styles from './People.module.scss';
import Link from 'next/link';

type Props = {
  data: SWPeople[] | null;
  searchParams: { [key: string]: string };
};

export default function People({ data, searchParams }: Props) {
  const { search, page } = searchParams;
  const searchValue = search ? search : '';
  const currentPage = page ? Number(page) : 1;

  return (
    <div className={styles.container}>
      {data?.map((person: SWPeople, index: number) => {
        const personId = getIdPerson(person.url);
        return (
          <Link
            href={`?search=${searchValue}&page=${currentPage}&details=${personId}`}
            key={index}
            className={styles.person}
          >
            {`${personId}. ${person.name} - click for more information...`}
          </Link>
        );
      })}
    </div>
  );
}
