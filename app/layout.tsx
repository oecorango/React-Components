import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import styles from './layout.module.scss';
import '../styles/global.scss';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
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
