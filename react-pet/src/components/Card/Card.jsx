import classes from './Card.module.scss'

function Card({item}) {
  return (
    <div className={classes.cardContainer}>
      <div>
        { item.title }
      </div>
      <div>
        Цена: <span>{ item.price }</span>
      </div>
      <button>Купить</button>
    </div>
  )
}

export default Card