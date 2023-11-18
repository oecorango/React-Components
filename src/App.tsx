import { Route, Routes } from 'react-router-dom';
import { PeoplePage } from './pages/people/PeoplePage';
import { Layout } from './components/Layout';
import { FilmsPage } from './pages/films/FilmsPage';
import { PlanetsPage } from './pages/planets/PlanetsPage';
import { StarShipsPage } from './pages/starShips/StarShipsPage';
import { ErrorPage } from './pages/notFound/ErrorPage';
import { Context } from './context/context';
import { useState } from 'react';
import { SWData, SWPeople } from './interface/commons';
import { Provider } from 'react-redux';
import { store } from './store/index';

const App = (): JSX.Element => {
  const [data, setData] = useState<SWData | null>(null);
  const [search, setSearch] = useState<string | null>(null);
  const [personData, setPersonData] = useState<SWPeople | null>(null);

  return (
    <Provider store={store}>
      {/* <Context.Provider
        value={{
          data,
          setData,
          search,
          setSearch,
          personData,
          setPersonData,
        }}
      > */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PeoplePage />} />
          <Route path="films" element={<FilmsPage />} />
          <Route path="planets" element={<PlanetsPage />} />
          <Route path="starships" element={<StarShipsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {/* </Context.Provider> */}
    </Provider>
  );
};

export default App;
