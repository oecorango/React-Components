'use client';
import styles from './error.module.scss';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className={styles.body}>
        <h2>Something went wrong!</h2>
        <p>{error.stack}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
