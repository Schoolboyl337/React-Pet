import classes from './Card.module.scss'
import MyButton from '../UI/Button/MyButton'
import { Link } from 'react-router-dom'

function Card({item,...props}) {
  return (
    <div className={classes.cardContainer}>
      <div>
        { item.title }
      </div>
      <div>
        Цена: <span>{ item.body.length }$</span>
      </div>
      <div className={classes.cardContainerBtns}>
        <MyButton>
          <Link to={`${item.id}`}>
            Посмотреть
          </Link>
        </MyButton>
        <MyButton onClick={() => props.deleteCard(item)}>Купить</MyButton>
      </div>
    </div>
  )
}

export default Card