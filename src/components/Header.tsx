import { Component, ReactNode } from 'react';
import styles from './Header.module.scss';

export class Header extends Component {
  render(): ReactNode {
    return (
      <header className={styles.container}>
        <p className={styles.logo}>SW People</p>
      </header>
    );
  }
}
