import './card.css';

const Card = (props) => {
  const {logo, heading} = props;
  
  return (
    <div className="Card">
      <div className="header">
        <img className="logo" src={props.logo} alt=""/>
        <div className="message">{props.heading}</div>
      </div>
      {props.children}
    </div>
  );
};

export default Card;
