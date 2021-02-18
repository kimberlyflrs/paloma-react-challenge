import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navbar.js';
import Series from '../components/series.js';
import Footer from '../components/footer.js';
import React, {useContext} from 'react';
import FeedCard from "../components/feedCard.js";
import FeedContext from '../context/FeedContext';

const MoviePage =()=> {
  const feedContext = useContext(FeedContext);

  return (
    <div className="App">
      <Navigation/>
      <Series title={"Popular Movies"}/>
      <div className="">
        {feedContext.feedList.map((item, index) => <FeedCard key={index} info={item.title} image={item.images["Poster Art"].url}/>)}
      </div>
      <Footer/>
    </div>
  );
}

export default MoviePage;
