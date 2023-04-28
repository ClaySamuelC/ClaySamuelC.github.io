import './card.css';

function Card({link, message}) {
  return (
    <div className="Card">
      <a href={link}>{message}</a>
    </div>
  )
}

export default Card;
