import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Series(props) {
    return (
      <Container fluid className="footer">
        <Row>
          <Col>
            <div className="links">
            <h2>{props.title}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Series;
  