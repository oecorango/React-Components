'use client';

import styles from './Pagination.module.scss';
import Link from 'next/link';

type Props = {
  pagination: number[];
  searchParams: { [key: string]: string };
};

export default function Pagination({ pagination, searchParams }: Props) {
  const { search, page } = searchParams;
  const searchValue = search ? search : '';
  const currentPage = page ? Number(page) : 1;

  return (
    <div className={styles.pagination}>
      {pagination.map((curPage, index) => (
        <Link
          href={`?search=${searchValue}&page=${curPage}`}
          key={index}
          className={
            curPage === currentPage ? styles.paginationButtonActive : styles.paginationButton
          }
        >
          {curPage}
        </Link>
      ))}
    </div>
  );
}
