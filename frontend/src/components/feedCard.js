import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const feedCard =(props)=> {
    var route = "/"+props.location;
  return (
    <div className="feedCard">
        <Link to={route} className="link">
        <div className="card">
            <h3 className="white">{props.titleCard}</h3>
         </div>

        <div className="cardTitle">
          <p>{props.info}</p>
        </div>
        </Link>
    </div>
  );
}

export default feedCard;
