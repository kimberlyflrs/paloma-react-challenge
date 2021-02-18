import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navbar.js';
import PageName from '../components/pageName.js';
import Footer from '../components/footer.js';
import React, {useContext} from 'react';
import FeedCard from "../components/feedCard.js";
import FeedContext from '../context/FeedContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SeriesPage =()=> {
  const feedContext = useContext(FeedContext);
  
  return (
    <div className="App">
      <Navigation/>
      <PageName title={"Popular Series"}/>
      <Container fluid className="feedResults">
        <Row>
          {feedContext.feedList.map((item, index) => <Col><FeedCard key={index} info={item.title} image={item.images["Poster Art"].url}/></Col>)}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default SeriesPage;
