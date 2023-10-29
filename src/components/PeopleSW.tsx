import { Component, ReactNode } from 'react';
import { People } from '../interface/interface';
import styles from './PeopleSW.module.scss';

export class PeopleSW extends Component<People, object> {
  constructor(props: People) {
    super(props);
  }

  render(): ReactNode {
    return (
      <>
        {this.props.people.length ? (
          <>
            <p className={styles.header}>The main characters of the Star Wars saga:</p>
            {this.props.people.map((person, index) => (
              <p
                key={index}
                className={styles.person}
              >{`+ ${person.name}, ${person.gender}, year of birth: ${person.birth_year}. Click for more information...`}</p>
            ))}
          </>
        ) : (
          <p className={styles.header}>A character with this name has not been found</p>
        )}
      </>
    );
  }
}
