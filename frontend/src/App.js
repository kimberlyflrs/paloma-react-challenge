import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/home";
import FeedPage from "./pages/feed";

function App() {
  return (
    <Router>
    <Switch>
    <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={HomePage}></Route>
      <Route exact path="/series" component={FeedPage}></Route>
      <Route exact path="/movie" component={FeedPage}></Route>
    </Switch>
  </Router>
  );
}

export default App;
