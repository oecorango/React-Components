import Pagination from '@/components/Pagination';
import People from '@/components/People';
import { getPeople } from 'api/api';

export default async function Home() {
  const { data, pagination } = await getPeople('');
  return (
    <>
      <People data={data.results} />
      <Pagination pagination={pagination} />
    </>
  );
}
