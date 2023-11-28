import Pagination from '@/components/Pagination';
import People from '@/components/People';
import { getPeople } from 'api/api';

export default async function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { search, page } = searchParams;

  const { data, pagination } = await getPeople(search, page);

  return (
    <>
      <People data={data.results} />
      <Pagination pagination={pagination} searchParams={searchParams} />
    </>
  );
}
