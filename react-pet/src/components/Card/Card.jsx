import classes from './Card.module.scss'
import MyButton from '../UI/Button/MyButton'

function Card({item,...props}) {
  return (
    <div className={classes.cardContainer}>
      <div>
        { item.title }
      </div>
      <div>
        Цена: <span>{ item.body.length }$</span>
      </div>
      <MyButton onClick={() => props.deleteCard(item)}>Купить</MyButton>
    </div>
  )
}

export default Card