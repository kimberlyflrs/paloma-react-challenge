import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function PageName(props) {
    return (
      <Container fluid className="pageNameSection">
        <Row>
          <Col>
            <h2>{props.title}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default PageName;
  