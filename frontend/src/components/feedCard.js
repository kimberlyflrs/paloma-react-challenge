
const feedCard =(props)=> {
  return (
    <div className="feedCard">
        <div className="card">
            <img src={props.image} class="feedImage"/>
            <h3 className="white">{props.titleCard}</h3>
         </div>

        <div className="cardTitle">
          <p>{props.info}</p>
        </div>
    </div>
  );
}

/*
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
*/

export default feedCard;
