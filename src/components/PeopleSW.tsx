import { Component } from 'react';
import { Props, State } from '../interface/interface';
import { getSPeopleData } from '../api/api';
import styles from './PeopleSW.module.scss';

export class PeopleSW extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoaded: false,
      persons: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const data = await getSPeopleData();
    this.setState({
      isLoaded: true,
      persons: data.results,
    });
  }

  render(): JSX.Element {
    const { isLoaded, persons } = this.state;

    if (!isLoaded) {
      return (
        <div className={styles.container}>
          <p className={styles.header}>Loading...</p>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <p className={styles.header}>The main characters of the Star Wars saga:</p>
          {persons.map((person, index) => (
            <p
              key={index}
              className={styles.person}
            >{`+ ${person.name}, ${person.gender}, year of birth: ${person.birth_year}. Click for more information...`}</p>
          ))}
        </div>
      );
    }
  }
}
