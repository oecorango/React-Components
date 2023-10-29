import { Component, ReactNode } from 'react';
import styles from './Footer.module.scss';

export class Footer extends Component {
  render(): ReactNode {
    return (
      <footer className={styles.container}>
        <p>2023</p>
      </footer>
    );
  }
}
