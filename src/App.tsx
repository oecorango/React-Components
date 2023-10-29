import { Component, ReactNode } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Header />
        <MainPage />
        <Footer />
      </>
    );
  }
}

export default App;
