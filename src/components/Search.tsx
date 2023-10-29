import { Component } from 'react';
import { Props, SearchPeople } from '../interface/interface';
import { getSearchInLocalStorage } from '../utils/utils';
import styles from './Search.module.scss';

export class Search extends Component<Props, SearchPeople> {
  constructor(props: Props) {
    super(props);
    this.state = {
      search: getSearchInLocalStorage(),
    };
  }

  handler = (search: string): void => {
    if (this.props.clickHandler) this.props.clickHandler(search);
  };

  render(): JSX.Element {
    return (
      <div className={styles.container}>
        <input
          className={styles.searchInput}
          type="text"
          value={this.state.search}
          onChange={(event) => {
            this.setState({ search: event.target.value });
            localStorage.setItem('searchValue', event.target.value);
          }}
          placeholder="Enter the hero`s name"
        />
        <button
          className={styles.searchButton}
          onClick={() => {
            this.props.handler(this.state.search);
          }}
        >
          Search hero`s
        </button>
      </div>
    );
  }
}
