//<img src={props.image} class="feedImage"/>

const feedCard =(props)=> {
  return (
    <div>
        <div className="card">
            <img src={props.image} className={!props.image ? "hide" : "feedImage"}/>

            <h3 className="white">{props.titleCard}</h3>
         </div>
          <p className="cardTitle">{props.info}</p>
    </div>
  );
}

export default feedCard;
