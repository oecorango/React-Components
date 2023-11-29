import Pagination from '@/components/Pagination';
import People from '@/components/People';
import PersonInfo from '@/components/PersonInfo';
import { getPeople, getPersonData } from 'api/api';

export default async function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { search, page, details } = searchParams;

  const { data, pagination } = await getPeople(search, page);
  const personData = await getPersonData(details);

  return (
    <>
      <div style={{ display: 'flex', paddingTop: '30px' }}>
        <People data={data.results} searchParams={searchParams} />
        <PersonInfo personData={personData} searchParams={searchParams} />
      </div>

      <Pagination pagination={pagination} searchParams={searchParams} />
    </>
  );
}
