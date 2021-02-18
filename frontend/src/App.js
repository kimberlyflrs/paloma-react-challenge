import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import FeedState from "./context/FeedState";
import HomePage from "./pages/home";
import SeriesPage from "./pages/series";
import MoviePage from "./pages/movies";

function App() {
  return (
    <FeedState>
    <Router>
    <Switch>
    <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={HomePage}></Route>
      <Route exact path="/series" component={SeriesPage}></Route>
      <Route exact path="/movie" component={MoviePage}></Route>
    </Switch>
  </Router>
  </FeedState>
  );
}

export default App;
