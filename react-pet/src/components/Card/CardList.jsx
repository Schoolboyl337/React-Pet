import classes from './CardList.module.scss'
import Card from './Card'
import { useState, useRef } from 'react'
function CardList({cards,deleteCard,...props}) {
  if (!cards.length) {
    return (
      <h2 style={{textAlign: 'center'}}>
        Ну типа пусто
      </h2>
    )
  }
  return (
    <div className={classes.indexCards}>
      {cards.map(card => 
          <Card item={card} key={card.id} deleteCard={deleteCard}></Card>
      )}
    </div>
  )
}
export default CardList
