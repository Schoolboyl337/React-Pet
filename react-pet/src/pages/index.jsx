import { useMemo, useState } from 'react'
import CardList from '../components/Card/CardList'
import CardFilter from '../components/Filter/CardFilter'
import Form from '../components/Form/Form'

function Index(props) {
  const [cards,setCards] = useState([
    {id:1, title:'Pivo', price: '100'},
    {id:2, title:'Dangen Master', price: '300'},
    {id:3, title:'A4', price: '1000'}
  ])

  const [filter, setFilter] = useState({
    sort:'',
    query:''
  })

  const sortedCards = useMemo(()=> {
    if(filter.sort) {
      return [...cards].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return cards
  },[filter.sort,cards])

  const sortedAndSerchedCards = useMemo(()=> {
    return sortedCards.filter(card => card.title.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query, sortedCards])

  const addCard = (newCard) => {
    setCards([...cards, newCard])
  }

  const deleteCard = (card) => {
    setCards(cards.filter(item => item.id !== card.id))
  }

  return (
    <div>
      <Form createCard={addCard}></Form>
      <CardFilter
        filter={filter}
        setFilter={setFilter}
      />
      { sortedAndSerchedCards.length
        ? 
        <CardList cards={sortedAndSerchedCards} deleteCard={deleteCard}></CardList>
        : 
        <h2 style={{textAlign: "center"}}>
          Ну типа ничего нет
        </h2>
      }
      
    </div>
  )
}

export default Index