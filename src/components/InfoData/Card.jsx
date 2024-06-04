import './index.css';

const Card = (props) => {
  return (
    <div className={`${props.css}`}>{props.children}</div>
  )
}

export default Card