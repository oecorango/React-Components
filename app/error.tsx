'use client';
import { useRouter } from 'next/navigation';
import styles from './error.module.scss';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className={styles.errorPage}>
        <h2>Something went wrong!</h2>
        <p>{error.stack}</p>
        <button
          onClick={() => {
            reset();
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
