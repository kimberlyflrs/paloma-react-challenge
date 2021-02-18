import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navbar.js';
import PageName from '../components/pageName.js';
import FeedCard from '../components/feedCard.js';
import Footer from '../components/footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Redirect} from 'react-router-dom';
import React, {useState, useContext} from 'react';
import FeedContext from '../context/FeedContext';

const HomePage =()=> {
  const feedContext = useContext(FeedContext);
  const [navigate, setNavigate] = useState(false);
  var content;

  const searchFeed = async(feedType)=>{
    //fetches the feed
    feedContext.changeLoading();
    await feedContext.searchFeed(feedType);
    if(feedContext.feedList.length != 0){
      setNavigate(true);
    }
  }

  if(feedContext.isLoading){
    content = "Loading..."
  }

  if(feedContext.error){
    content =feedContext.error;
  }

  if(navigate){
    var location = "/"+feedContext.search
    return <Redirect to={location}/>
  }


  return (
    <div>
      <Navigation/>
      <PageName title={"Popular Titles"}/>
      <Container fluid className="homeContainer">
        <Row>{content}</Row>
        <div className={feedContext.isLoading ? "hide" : "show"}>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <button onClick={()=>searchFeed("series")}><FeedCard info={"Popular Series"} titleCard={"SERIES"} location={"series"}/></button>
            </Col>
            <Col sm={12} md={6} lg={6}> 
            <button onClick={()=>searchFeed("movie")}><FeedCard info={"Popular Movies"} titleCard={"MOVIES"} location={"movie"}/></button>
            </Col>
          </Row>
        </div>
        </Container>
      <Footer/>
    </div>
  );
}

export default HomePage;
