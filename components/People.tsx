'use client';
import { getPersonData } from 'api/api';
import { SWPeople } from 'interfaces';
import { getIdPerson } from 'utils';
import styles from './People.module.scss';
import PersonInfo from './PersonInfo';

type Props = {
  data: SWPeople[];
  personData: SWPeople | null;
};

export default function People({ data, personData }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.people}>
        {data.map((person: SWPeople, index: number) => {
          const personId = getIdPerson(person.url);
          return (
            <p key={index} className={styles.person}>
              {`${personId}. ${person.name} - click for more information...`}
            </p>
          );
        })}
      </div>
      <PersonInfo personData={personData} />
    </div>
  );
}
