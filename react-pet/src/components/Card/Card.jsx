import classes from './Card.module.scss'
import MyButton from '../UI/Button/MyButton'

function Card({item}) {
  return (
    <div className={classes.cardContainer}>
      <div>
        { item.title }
      </div>
      <div>
        Цена: <span>{ item.price }</span>
      </div>
      <MyButton>Купить</MyButton>
    </div>
  )
}

export default Card