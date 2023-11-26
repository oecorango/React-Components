'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Pagination.module.scss';

type Props = {
  pagination: number[];
};

export default function Pagination({ pagination }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.pagination}>
      {pagination.map((page, index) => (
        <button
          key={index}
          className={
            pathname === `/${page}` ? styles.paginationButtonActive : styles.paginationButton
          }
          onClick={() => {
            router.push(`${page}`);
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
