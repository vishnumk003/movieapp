import logo from './logo.svg';
import './App.scss';
import LoginPage from './components/loginpage/LoginPage';
import { Route,BrowserRouter,Switch } from 'react-router-dom';
import MovieContainer from './components/MovieContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path="/movie-home" component={MovieContainer}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
