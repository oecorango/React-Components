import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import styles from './layout.module.scss';
import '../styles/global.scss';
import { SWPeople } from 'interfaces';
import { getIdPerson } from 'utils';
import { getPeople } from 'api/api';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { data } = await getPeople('');

  return (
    <html lang="en">
      <body>
        <Header />

        <main className={styles.container}>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
