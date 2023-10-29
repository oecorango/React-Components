import { Component } from 'react';
import { PeopleSW } from '../components/PeopleSW';
import { Search } from '../components/Search';
export class MainPage extends Component {
  render(): JSX.Element {
    return (
      <main>
        <Search />
        <PeopleSW />
      </main>
    );
  }
}
