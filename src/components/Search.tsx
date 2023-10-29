import { Component } from 'react';
import { getSearchInLocalStorage } from '../utils/utils';
import styles from './Search.module.scss';

export class Search extends Component {
  state = {
    search: getSearchInLocalStorage(),
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
            // const search = localStorage.getItem('searchValue');
          }}
        >
          Search hero`s
        </button>
      </div>
    );
  }
}
