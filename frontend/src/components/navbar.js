import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


function Navigation() {
  return (
    <Navbar expand="lg" className="custom-Nav">
    <Link to="/home" className="navlink"><h1 className="title white">DEMO Streaming</h1></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
        <a href="#login" className="white">Log In</a></Nav.Item>
        <Nav.Item>
        <Button href="#trial" className="custom-button">Start your free trial</Button></Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
};


export default Navigation;
