import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navbar.js';
import PageName from '../components/pageName.js';
import FeedCard from '../components/feedCard.js';
import Footer from '../components/footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import React from 'react';

const HomePage =()=> {

  return (
    <div>
      <Navigation/>
      <PageName title={"Popular Titles"}/>
      <Container fluid className="homeContainer">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <Link to={{pathname: "/series", state: {search: "series"}}}><FeedCard info={"Popular Series"} titleCard={"SERIES"} location={"series"}/></Link>
            </Col>
            <Col sm={12} md={6} lg={6}> 
            <Link to="/movie"><FeedCard info={"Popular Movies"} titleCard={"MOVIES"} location={"movie"}/></Link>
            </Col>
          </Row>

        </Container>
      <Footer/>
    </div>
  );
}

export default HomePage;
