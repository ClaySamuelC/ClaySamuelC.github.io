import './card.css';

function Card({link, logo, message}) {
  return (
    <div className="Card">
      <img className="logo" src={logo} alt=""/>
      <a className="content" href={link}>{message}</a>
    </div>
  )
}

export default Card;
