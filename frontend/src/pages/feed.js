import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navbar.js';
import PageName from '../components/pageName.js';
import Footer from '../components/footer.js';
import React from 'react';
import FeedCard from "../components/feedCard.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import feedData from '../feedData.js';

class FeedPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      feed: [],
      loading: true
    }
  }

async componentDidMount(){
    var search = this.props.location.pathname.slice(1);
    var data = await feedData(search);
    //console.log(data);
    this.setState({feed: data,
    loading:false});
  }
  

  render() {
    var title = this.props.location.pathname.slice(1);
    if(title==="movie"){
      title+="s";
    }
    title = title.charAt(0).toUpperCase() + title.slice(1);

    return (
      <div className="App">
        <Navigation/>
        <PageName title={"Popular "+title}/>
        <Container fluid className="feedResults">
          <Row>
            <div className={this.state.loading ? "contentContainer" : "hide"}>
              <div className={this.state.loading ? "show" : "hide"}>Loading...</div>
              <div className={(this.state.feed.length === 0 && !this.state.loading) ? "show" : "hide"}>Oops, something went wrong...</div>
            </div>
          </Row>
          <Row>
            {this.state.feed.map((item, index) => 
              <Col><FeedCard className={this.state.loading ? "hide" : "show"} key={index} info={item.title} image={item.images["Poster Art"].url}/></Col>)}

          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default FeedPage;
