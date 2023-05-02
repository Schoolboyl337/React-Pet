import { useState } from 'react'
import Card from '../components/Card/Card'
import classes from './index.module.scss'

function Index(props) {
  const [cards,setCards] = useState([
    {id:1, title:'Pivo', price: 100},
    {id:2, title:'Dangen Master', price: 300},
    {id:3, title:'A4', price: 1000}
  ])
  return (
    <div className={classes.index}>
        {cards.map(card => 
            <Card item={card} key={card.id}></Card>
        )}
    </div>
  )
}

export default Index