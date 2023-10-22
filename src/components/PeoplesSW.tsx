import { Component } from 'react';
import { SW_URL } from '../constants/api';
import { Props, State } from '../interface/interface';
import { getSPeopleData } from '../api/api';
// import styles from '.PeoplesSW.module.css';

export class PeoplesSW extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const data = await getSPeopleData(SW_URL);
    this.setState({
      isLoaded: true,
      items: data.results,
    });
  }

  render(): JSX.Element {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          {items.map((data, index) => {
            return (
              <div key={index}>
                <p>{data.name}</p>
                <p>{data.gender}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
