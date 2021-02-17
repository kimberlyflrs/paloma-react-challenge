import facebookIcon from "../assets/social/facebook-white.svg";
import twitterIcon from "../assets/social/twitter-white.svg";
import instagramIcon from "../assets/social/instagram-white.svg";
import appStoreIcon from "../assets/store/app-store.svg";
import playStoreIcon from "../assets/store/play-store.svg";
import windowsStoreIcon from "../assets/store/windows-store.svg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
      <Container fluid className="footer">
        <Row>
          <Col>
            <div className="links">
            <p>Home</p> <p>|</p>
            <p>Terms and Conditions</p> <p>|</p>
            <p>Privacy Policy</p> <p>|</p>
            <p>Collection Statement</p> <p>|</p>
            <p>Help</p> <p>|</p>
            <p>Manage Account</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
          <div className="copyright">
              <p>Copright 2016 DEMO Streaming. All Rights Reserved</p>
          </div>
          </Col>
        </Row>

        <Row className="media-links">
          <Col sm={12} md={12} lg={6}>
          <div className="social-icons">
            <img src={facebookIcon} class="social-icon"/>
            <img src={twitterIcon} class="social-icon"/>
            <img src={instagramIcon} class="social-icon"/>
          </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
          <div className="app-stores">
            <img src={appStoreIcon} class="app-store" />
            <img src={playStoreIcon} class="app-store"/>
            <img src={windowsStoreIcon} class="app-store"/>
          </div>
          </Col>
        </Row>

      </Container>
    );
  }
  
  export default Footer;
  