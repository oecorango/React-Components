import { Route, Routes } from 'react-router-dom';
import { PeoplePage } from './pages/people/PeoplePage';
import { Layout } from './components/Layout';
import { ErrorPage } from './pages/notFound/ErrorPage';
import { Provider } from 'react-redux';
import { store } from './store/index';

const App = (): JSX.Element => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PeoplePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Provider>
);

export default App;
