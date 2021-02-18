import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navbar.js';
import Series from '../components/series.js';
import Footer from '../components/footer.js';
import getFeed from '../getFeed';

const SeriesPage =()=> {
  return (
    <div className="App">
      <Navigation/>
      <Series/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          series
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default SeriesPage;
