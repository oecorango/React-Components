import Pagination from '@/components/Pagination';
import People from '@/components/People';
import { getPeople, getPersonData } from 'api/api';
import { PropsPages } from 'interfaces';

export default async function PeopleSW({ params: { countPage } }: PropsPages) {
  const { data, pagination } = await getPeople(countPage);
  const personData = await getPersonData('');

  return (
    <>
      <People data={data.results} personData={personData} />
      <Pagination pagination={pagination} />
    </>
  );
}
