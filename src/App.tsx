import { Route, Routes } from 'react-router-dom';
import { PeoplePage } from './pages/people/PeoplePage';
import { Layout } from './components/Layout';
import { FilmsPage } from './pages/films/FilmsPage';
import { PlanetsPage } from './pages/planets/PlanetsPage';
import { StarShipsPage } from './pages/starShips/StarShipsPage';
import { ErrorPage } from './pages/notFound/ErrorPage';
import { PersonPage } from './components/PersonInfo';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PeoplePage />} />
        {/* <Route path="/:search" element={<PersonPage />} /> */}
        <Route path="films" element={<FilmsPage />} />
        <Route path="planets" element={<PlanetsPage />} />
        <Route path="starships" element={<StarShipsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
