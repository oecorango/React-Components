import { Component } from 'react';
import { getSPeopleData } from '../api/api';
import { PeopleSW } from '../components/PeopleSW';
import { Search } from '../components/Search';
import { Props, SWState } from '../interface/interface';
import styles from './MainPage.module.scss';

export class MainPage extends Component<Props, SWState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoaded: false,
      persons: [],
    };
  }

  clickHandler = async (search: string): Promise<void> => {
    this.setState({
      isLoaded: false,
    });

    search = encodeURIComponent(search);
    const data = await getSPeopleData(`?search=${search}`);
    this.setState({
      isLoaded: true,
      persons: data.results,
    });
  };

  async componentDidMount(): Promise<void> {
    const getSearch = localStorage.getItem('searchValue');
    const urlSearch = () => (getSearch ? `?search=${getSearch}` : '');

    const data = await getSPeopleData(urlSearch());
    this.setState({
      isLoaded: true,
      persons: data.results,
    });
  }

  render(): JSX.Element {
    return (
      <main>
        <Search handler={this.clickHandler} />

        <div className={styles.container}>
          {!this.state.isLoaded ? (
            <p className={styles.header}>Loading...</p>
          ) : (
            <PeopleSW {...this.state} />
          )}
        </div>
      </main>
    );
  }
}
