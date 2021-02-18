import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navbar.js';
import Series from '../components/series.js';
import FeedCard from '../components/feedCard.js';
import Footer from '../components/footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage =()=> {
  return (
    <div>
      <Navigation/>
      <Series title={"Popular Titles"}/>
      <Container fluid className="homeContainer">
        <Row>
          <Col sm={12} md={6} lg={2}>
            <FeedCard info={"Popular Series"} titleCard={"SERIES"} location={"series"}/> 
          </Col>
          <Col sm={12} md={6} lg={2}> 
            <FeedCard info={"Popular Movies"} titleCard={"MOVIES"} location={"movie"}/>
          </Col>
        </Row>
        </Container>
      <Footer/>
    </div>
  );
}

export default HomePage;
