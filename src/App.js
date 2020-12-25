import './App.css';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
// import NotFoundView from './views/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/:movieId">
          <MovieDetailsPage />
        </Route>
        {/* <Route>
          <NotFoundView />
        </Route>   */}
      </Switch>
    </Container>
  );
}
