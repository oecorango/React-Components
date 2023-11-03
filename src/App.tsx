import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage';
import { Layout } from './components/Layout';
import { FilmsPage } from './pages/films/FilmsPage';
import { PlanetsPage } from './pages/planets/PlanetsPage';
import { StarShipsPage } from './pages/starShips/StarShipsPage';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />}></Route>
        <Route path={'/films'} element={<FilmsPage />} />
        <Route path={'/planets'} element={<PlanetsPage />} />
        <Route path={'/starships'} element={<StarShipsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
